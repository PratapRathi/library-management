import { date, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED']);
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);
export const BORROW_STATUS_ENUM = pgEnum('borrow_status', ['BORROWED', 'RETURNED']);

export const users = pgTable('users', {
    id: uuid('id').notNull().defaultRandom().primaryKey().unique(),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    email: varchar('email').notNull().unique(),
    password: text('password').notNull(),
    universityId: integer('university_id').notNull().unique(),
    universityCard: text('university_card').notNull(),
    status: STATUS_ENUM('status').notNull().default('PENDING'),
    role: ROLE_ENUM('role').notNull().default('USER'),
    lastActivityDate: date('last_activity_date').notNull().defaultNow(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
