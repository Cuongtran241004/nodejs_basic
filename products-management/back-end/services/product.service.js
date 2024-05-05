let productList = [
  {
    id: 1,
    name: "Arduino Uno",
    amount: 10,
    price: 150,
    sale: 20,
  },
  {
    id: 2,
    name: "Breadboard XL size",
    amount: 30,
    price: 50,
    sale: 10,
  },
  {
    id: 3,
    name: "Humid sensor",
    amount: 25,
    price: 45,
    sale: 35,
  },
];

const getAll = () => {
  if (productList) {
    return productList;
  } else {
    return null;
  }
};

const getDetail = (id) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    return productList[index];
  } else {
    return null;
  }
};

const create = (name, amount, price, sale) => {
  const newProduct = {
    id: Math.random() * 10,
    name,
    amount,

    price,
    sale,
  };
  productList = [...productList, newProduct];
  return newProduct;
};

const update = (id, name, amount, price, sale) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const oldProduct = productList[index];
    const updateProduct = { ...oldProduct, name, amount, price, sale };
    productList[index] = updateProduct;
    return updateProduct;
  } else {
    return null;
  }
};

const remove = (id) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const deleteProduct = productList[index];
    productList = productList.filter((product) => product.id != id);
    return deleteProduct;
  } else {
    return null;
  }
};

module.exports = {
  getAll,
  getDetail,
  create,
  update,
  remove,
};
