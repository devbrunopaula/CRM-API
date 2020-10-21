"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Account extends Model {
  static get primaryKey() {
    return "accountID";
  }
  static get incrementing() {
    return false;
  }

  orders() {
    return this.hasMany("App/Models/Order", "accountID", "accountID");
  }
}

module.exports = Account;
