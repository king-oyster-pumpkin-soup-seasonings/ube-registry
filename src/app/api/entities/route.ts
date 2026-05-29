import { db } from "@/lib/db";

export async function GET() {
  const result = await db.query("SELECT * FROM entities ORDER BY id DESC");
  return Response.json(result.rows);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { specimen_id, provisional_name } = body;
  const result = await db.query(
    "INSERT INTO entities (specimen_id, provisional_name) VALUES ($1, $2) RETURNING *",
    [specimen_id, provisional_name],
  );
  return Response.json(result.rows[0]);
}
