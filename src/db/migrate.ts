import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "../env";
import chalk from 'chalk'

const DB_CONNECTION = env.DB_CONNECTION

const connection = postgres(DB_CONNECTION, { max: 1 })
const db = drizzle(connection)

await migrate(db, {migrationsFolder: 'drizzle'})

console.log(chalk.greenBright('Migrations applied successfully'))

await connection.end()

process.exit()