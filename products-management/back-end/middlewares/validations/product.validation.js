const checkEmpty = (req, res, next) => {
  const { name, amount, price, sale } = req.body;
  if (name && amount && price && sale) {
    next();
  } else {
    res.status(500).send("Must not be blank!");
  }
};

const checkSale = (req, res, next) => {
  const { sale } = req.body;
  if (sale >= 0 && sale <= 100) {
    next();
  } else {
    res.status(500).send("Sale must in range [0, 100]");
  }
};
module.exports = {
  checkEmpty,
  checkSale,
};
