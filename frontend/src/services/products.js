import axios from "axios";

const baseUrl = "http://localhost:9000/products";

export const getAll = async (page, itemsPerPage, active) => {
  const res = await axios.get(
    `${baseUrl}?page=${page}&itemsPerPage=${itemsPerPage}&active=${active}`
  );
  return res.data.list;
};

export const createNewProduct = async ({ name, description, price, SKU }) => {
  const product = { name, description, price, SKU, active: true };
  const response = await axios.post(baseUrl, product);
  return response.data.list;
};

export const updateSelectedProduct = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data.list;
};

export const deleteSelectedProduct = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data.list;
};
