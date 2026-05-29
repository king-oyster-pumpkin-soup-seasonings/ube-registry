import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await db.query(
    "SELECT * FROM media_records WHERE entity_id = $1",
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
  const { file_name, media_type } = body;
  const result = await db.query(
    `
    INSERT INTO media_records
    (entity_id, file_name, media_type)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [id, file_name, media_type],
  );
  return Response.json({ ...result.rows[0] });
}
