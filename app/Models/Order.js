"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Order extends Model {
  static get primaryKey() {
    return "orderID";
  }
  static get idColumn() {
    return "orderID";
  }
}

module.exports = Order;
