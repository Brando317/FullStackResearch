import express from "express";
import productsRouter from "./productsRouter";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.json({ msg: "Hello World!" });
});

router.use("/products", productsRouter);

export default router;
