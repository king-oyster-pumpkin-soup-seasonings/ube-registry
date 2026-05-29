import { db } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const result = await db.query(
    `
    UPDATE entities
    SET specimen_id = $1,
        provisional_name = $2,
        classification_status = $3
    WHERE id = $4
    RETURNING *
    `,
    [body.specimen_id, body.provisional_name, body.classification_status, id],
  );
  return Response.json(result.rows[0]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await db.query(
    "DELETE FROM entities WHERE id = $1 RETURNING *",
    [id],
  );
  return Response.json(result.rows[0]);
}
