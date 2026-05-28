import { Pool } from "pg";

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ube_registry",
  password: "postgres",
  port: 5432,
});
