import { getAll } from "../services/products";
import { createNewProduct } from "../services/products";

export const productReducer = (state = [], action) => {
  if (action.type === "@products/init") {
    return action.payload;
  }

  if (action.type === "@products/created") {
    return [...state, action.payload];
  }

  return state;
};

//ACTIONS CREATORS

export const createProduct = (content) => {
  return async (dispatch) => {
    const newProduct = await createNewProduct(content);
    dispatch({
      type: "@products/created",
      payload: newProduct,
    });
  };
};

export const initProducts = () => {
  return async (dispatch) => {
    const products = await getAll();
    dispatch({
      type: "@products/init",
      payload: products,
    });
  };
};
