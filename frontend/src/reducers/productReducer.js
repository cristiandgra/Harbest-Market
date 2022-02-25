import { getAll } from "../services/products";
import { createNewProduct } from "../services/products";
import { updateSelectedProduct } from "../services/products";
import { deleteSelectedProduct } from "../services/products";

export const productReducer = (state = [], action) => {
  if (action.type === "@products/init") {
    return action.payload;
  }

  if (action.type === "@products/created") {
    return [...state, action.payload];
  }

  if (action.type === "@products/updated") {
    return state.map((product) => {
      if (product.id === action.payload.id) {
        return action.payload;
      }
      return product;
    });
  }

  if (action.type === "@products/deleted") {
    return state.filter((product) => product.id === action.payload.id);
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
    const products = await getAll(0, 5, true);
    dispatch({
      type: "@products/init",
      payload: products,
    });
  };
};

export const updateProduct = (id, content) => {
  return async (dispatch) => {
    const updatedProduct = await updateSelectedProduct(id, content);
    dispatch({
      type: "@products/updated",
      payload: updatedProduct,
    });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const deletedProduct = await deleteSelectedProduct(id);
    dispatch({
      type: "@products/deleted",
      payload: deletedProduct,
    });
  };
};
