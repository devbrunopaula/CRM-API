"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdersSchema extends Schema {
  async up() {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    this.create("orders", (table) => {
      table
        .uuid("orderID")
        .notNullable()
        .primary()
        .defaultTo(this.db.raw("uuid_generate_v4()"));
      // table.timestamp("dateCreated").defaultTo(new Date());
      table.integer("orderNumber").defaultTo("8254");
      table.string("orderType").defaultTo("Work Order");
      table
        .uuid("accountID")
        .notNullable()
        .references("accountID")
        .inTable("accounts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrdersSchema;
