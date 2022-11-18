import postgres from "postgres";

const sql = postgres(process.env.PG_DB_URL);

export default sql;