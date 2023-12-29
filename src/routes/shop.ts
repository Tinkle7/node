import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`
      <h1>Hello from Express</h1>
      <br>
      <a href="/admin/add-product"><button>Go to Product</button></a>
    `);
});

export default router;
