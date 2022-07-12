const Store = require("../models/store");

const express = require("express");

const store = express.Router();

store.use(express.json())

store.get("/", async (req, res, next) => {
  const products = await Store.list();

  res.status(200).send({products: products});
});

module.exports = store;
