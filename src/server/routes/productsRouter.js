import express from "express";
import { getAllProducts } from "../db/queries/products";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let products = await getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

export default router;
