import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await db.query(
    "SELECT * FROM sightings WHERE entity_id = $1",
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
  const { location_description, sighting_date } = body;
  const result = await db.query(
    `
    INSERT INTO sightings
    (entity_id, location_description, sighting_date)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [id, location_description, sighting_date],
  );
  return Response.json(result.rows[0]);
}
