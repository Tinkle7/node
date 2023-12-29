import express from "express";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
         <input type="text" name="title">
         <button type="submit">Submit</button>
       </form>`
  );
});

router.post("/product", (req, res, next) => {
  const title = req.body.title;
  console.log("Received title:", title);
  res.redirect("/");
});


export default router;
