CREATE TABLE IF NOT EXISTS badgers_draft_board_state (
  id TEXT PRIMARY KEY DEFAULT 'main',
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO badgers_draft_board_state (id, data)
VALUES ('main', '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
