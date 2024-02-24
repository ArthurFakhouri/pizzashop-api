import type { Config } from "drizzle-kit";
import { env } from "./src/env";

const DB_CONNECTION = env.DB_CONNECTION

export default {
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DB_CONNECTION
  }
} satisfies Config;