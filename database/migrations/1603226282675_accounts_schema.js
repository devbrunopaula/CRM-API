"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AccountsSchema extends Schema {
  async up() {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    this.create("accounts", (table) => {
      table
        .uuid("accountID")
        .notNullable()
        .primary()
        .defaultTo(this.db.raw("uuid_generate_v4()"));
      table.text("accountName").notNullable();
      table.timestamps("created_at", true, true);
    });
  }

  down() {
    this.drop("accounts");
  }
}

module.exports = AccountsSchema;
