const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const {
  checkEmpty,
  checkSale,
} = require("../middlewares/validations/product.validation");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", checkEmpty, checkSale, createProduct);
productRouter.put("/:id", checkSale, updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
