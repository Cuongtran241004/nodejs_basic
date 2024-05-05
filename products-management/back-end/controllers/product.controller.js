const productServices = require("../services/product.service");

const getAllProducts = (req, res) => {
  const productList = productServices.getAll();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("An empty product list!");
  }
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = productServices.getDetail(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("No product is found!");
  }
};

const createProduct = (req, res) => {
  const { name, amount, price, sale } = req.body;
  const newProduct = productServices.create(name, amount, price, sale);
  res.status(201).send(newProduct);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, amount, price, sale } = req.body;
  const updatedProduct = productServices.update(id, name, amount, price, sale);

  if (updatedProduct) {
    res.status(200).send(updatedProduct);
  } else {
    res.status(404).send("No product is found!");
  }
};
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const deletedProduct = productServices.remove(id);
  if (deletedProduct) {
    res.status(200).send(deletedProduct);
  } else {
    res.status(404).send("No product is found!");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
