import express from "express";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.send(`
      <form action="/admin/add-product" method="POST">
        <input type="text" name="title">
        <button type="submit">Submit</button>
      </form>`);
});

router.post("/add-product", (req, res, next) => {
  const title = req.body.title;
  console.log("Received title:", title);
  res.redirect("/");
});

export default router;
