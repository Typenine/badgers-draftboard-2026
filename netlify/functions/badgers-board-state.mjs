import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    if (event.httpMethod === 'GET') {
      const rows = await sql`
        SELECT data, updated_at FROM badgers_draft_board_state WHERE id = 'main'
      `;

      if (rows.length === 0) {
        await sql`
          INSERT INTO badgers_draft_board_state (id, data)
          VALUES ('main', '{}'::jsonb)
          ON CONFLICT (id) DO NOTHING
        `;
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ data: {}, updatedAt: new Date().toISOString() }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ data: rows[0].data, updatedAt: rows[0].updated_at }),
      };
    }

    if (event.httpMethod === 'POST') {
      let body;
      try {
        body = event.body ? JSON.parse(event.body) : null;
      } catch {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Request body is not valid JSON.' }),
        };
      }

      if (!body || typeof body !== 'object') {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Request body must be a JSON object.' }),
        };
      }

      if (!body.data || typeof body.data !== 'object' || Array.isArray(body.data)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Request body must include a "data" field that is a JSON object.' }),
        };
      }

      const rows = await sql`
        INSERT INTO badgers_draft_board_state (id, data, updated_at)
        VALUES ('main', ${JSON.stringify(body.data)}::jsonb, NOW())
        ON CONFLICT (id) DO UPDATE
          SET data = ${JSON.stringify(body.data)}::jsonb, updated_at = NOW()
        RETURNING data, updated_at
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ data: rows[0].data, updatedAt: rows[0].updated_at }),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed. Use GET or POST.' }),
    };
  } catch (err) {
    console.error('badgers-board-state function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: `Database error: ${err.message || 'unknown'}` }),
    };
  }
};
