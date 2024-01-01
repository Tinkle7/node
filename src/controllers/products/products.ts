const products = [];

const handleGetAddProduct = (req, res, next) => {
  res.render("add-product");
};

const handlePostAddProduct = (req, res, next) => {
  const title = req.body.title;
  products.push({ title });
  res.redirect("/");
};

const handleGetProduct = (req, res, next) => {
  res.render("shop", { prods: products, docTitle: "My Shop" });
};

export { handleGetAddProduct, handlePostAddProduct, handleGetProduct };
