import axios from "axios";

const baseUrl = "http://localhost:3001/products";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const createNewProduct = async ({
  image,
  productName,
  description,
  price,
}) => {
  const product = { image, productName, description, price, active: true };
  console.log(product);
  const response = await axios.post(baseUrl, product);
  return response.data;
};
