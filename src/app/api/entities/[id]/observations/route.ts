import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await db.query(
    "SELECT * FROM observations WHERE entity_id = $1 ORDER BY id DESC",
    [id],
  );
  return Response.json(result.rows);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const { observation_date, observer_name, notes } = body;
  const result = await db.query(
    `
    INSERT INTO observations
    (entity_id, observation_date, observer_name, notes)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [id, observation_date, observer_name, notes],
  );
  return Response.json(result.rows[0]);
}
