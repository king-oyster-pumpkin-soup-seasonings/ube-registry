import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await db.query(
    "SELECT * FROM traits WHERE entity_id = $1 ORDER BY id DESC",
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
  const { trait_name, trait_value } = body;
  const result = await db.query(
    "INSERT INTO traits (entity_id, trait_name, trait_value) VALUES ($1, $2, $3) RETURNING *",
    [id, trait_name, trait_value],
  );
  return Response.json(result.rows[0]);
}
