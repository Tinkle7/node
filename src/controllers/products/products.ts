import ProductModel from "../../models/product";

const handleGetAddProduct = (req, res, next) => {
  res.render("add-product");
};

const handlePostAddProduct = (req, res, next) => {
  const title = req.body.title;
  const product = new ProductModel.Product(title);
  product.save();
  res.redirect("/");
};

const handleGetProduct = (req, res, next) => {
  res.render("shop", {
    prods: ProductModel.Product.fetchAll(),
    docTitle: "My Shop",
  });
};

export { handleGetAddProduct, handlePostAddProduct, handleGetProduct };
