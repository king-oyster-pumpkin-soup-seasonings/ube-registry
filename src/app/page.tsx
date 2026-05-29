async function getEntities() {
  const result = await fetch("http://localhost:3000/api/entities", {
    cache: "no-store",
  });
  return result.json();
}

export default async function Home() {
  const entities = await getEntities();
  return (
    <div>
      <h1>Entities</h1>
      <pre>{JSON.stringify(entities, null, 2)}</pre>
    </div>
  );
}
