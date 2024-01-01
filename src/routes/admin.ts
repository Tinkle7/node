import express from "express";

import productController from "../controllers/products";

const router = express.Router();

router.get("/add-product", productController.handleGetAddProduct);

router.post("/add-product", productController.handlePostAddProduct);

export default { router };
