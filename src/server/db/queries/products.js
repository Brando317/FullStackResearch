import Query from "../models";

const getAllProducts = () => {
  return Query("SELECT * FROM PRODUCTS");
};

export { getAllProducts };
