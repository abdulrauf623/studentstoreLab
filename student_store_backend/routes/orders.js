const Orders = require("../models/order");

const express = require("express");

const order = express.Router();

const { requireAuthenticatedUser } = require("../middleware/security");

order.use(express.json());

order.get("/", requireAuthenticatedUser, async (req, res, next) => {
    const {user} = res.locals
  const orders = await Orders.listOrdersForUser(user);

  res.status(200).send({ orders: orders });
});

order.post("/", requireAuthenticatedUser, async (req, res, next) => {
    
    const {user} = res.locals

  const orders = await Orders.createOrder(user, req.body);

  res.status(200).send({ order: orders});
});

module.exports = order;
