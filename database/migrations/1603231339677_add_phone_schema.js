"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddPhoneSchema extends Schema {
  up() {
    this.table("accounts", (table) => {
      table.string("phone", 20);
      table.boolean("active").defaultTo(true);
    });
  }

  down() {
    this.table("accounts", (table) => {
      table.dropColumns(["phone", "active"]);
    });
  }
}

module.exports = AddPhoneSchema;
