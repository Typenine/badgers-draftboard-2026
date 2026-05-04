import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  // CORS headers for cross-device access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const rows = await sql`
        SELECT data, updated_at FROM badgers_draft_board_state WHERE id = 'main'
      `;

      if (rows.length === 0) {
        // Row doesn't exist yet — create it
        await sql`
          INSERT INTO badgers_draft_board_state (id, data)
          VALUES ('main', '{}'::jsonb)
          ON CONFLICT (id) DO NOTHING
        `;
        return res.status(200).json({ data: {}, updatedAt: new Date().toISOString() });
      }

      return res.status(200).json({
        data: rows[0].data,
        updatedAt: rows[0].updated_at,
      });
    }

    if (req.method === 'POST') {
      const body = req.body;

      if (!body || typeof body !== 'object') {
        return res.status(400).json({ error: 'Request body must be a JSON object.' });
      }

      if (!body.data || typeof body.data !== 'object' || Array.isArray(body.data)) {
        return res.status(400).json({ error: 'Request body must include a "data" field that is a JSON object.' });
      }

      const rows = await sql`
        INSERT INTO badgers_draft_board_state (id, data, updated_at)
        VALUES ('main', ${JSON.stringify(body.data)}::jsonb, NOW())
        ON CONFLICT (id) DO UPDATE
          SET data = ${JSON.stringify(body.data)}::jsonb, updated_at = NOW()
        RETURNING data, updated_at
      `;

      return res.status(200).json({
        data: rows[0].data,
        updatedAt: rows[0].updated_at,
      });
    }

    return res.status(405).json({ error: 'Method not allowed. Use GET or POST.' });
  } catch (err) {
    console.error('badgers-board-state API error:', err);
    return res.status(500).json({ error: `Database error: ${err.message || 'unknown'}` });
  }
}
