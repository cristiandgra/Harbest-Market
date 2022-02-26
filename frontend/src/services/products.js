import axios from "axios";

const baseUrl = "http://localhost:9000/products";

export const getAll = async (page, itemsPerPage, active) => {
  const res = await axios.get(
    `${baseUrl}?page=${page}&itemsPerPage=${itemsPerPage}&active=${active}`
  );
  return res.data.list;
};

export const createNewProduct = async ({ image, name, description, price }) => {
  const product = { image, name, description, price, active: true };
  console.log(product);
  const response = await axios.post(baseUrl, product);
  return response.data.list;
};

export const updateSelectedProduct = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data.list;
};

export const deleteSelectedProduct = async (id) => {
  console.log(id);
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data.list;
};
