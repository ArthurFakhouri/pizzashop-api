import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from './users'
import { relations } from "drizzle-orm";

export const restaurants = pgTable("restaurants", {
    id: text("id").$defaultFn(() => createId()).primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    managerId: text("manager_id").references(() => users.id, {
        onDelete: 'set null',
    }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const restaurantsRelations = relations(restaurants, ({ one }) => {
    return {
        manager: one(users, {
            fields: [restaurants.managerId],
            references: [users.id],
            relationName: 'rastaurant_manager'
        })
    }
})