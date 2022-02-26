import { getAll, getTotal } from "../services/products";
import { createNewProduct } from "../services/products";
import { updateSelectedProduct } from "../services/products";
import { deleteSelectedProduct } from "../services/products";

// const productsPerPage = 8;

export const createProduct = (content) => {
  return async (dispatch) => {
    const newProduct = await createNewProduct(content);
    dispatch({
      type: "@products/created",
      payload: newProduct,
    });
  };
};

export const getProducts = (isActivo) => {
  return async (dispatch) => {
    const products = await getAll(0, 20, isActivo);
    dispatch({
      type: "@products/getProducts",
      payload: products,
    });
  };
};

export const getTotals = () => {
  return async (dispatch) => {
    const totals = await getTotal(0, 5);
    dispatch({
      type: "@products/getTotal",
      payload: totals,
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

// export const paginationSetPage = async (id) => {
//   return async (dispatch) => {
//     const products = await getAll(id, productsPerPage);
//     dispatch({
//       type: "@products/pagination/setPage",
//       payload: products,
//     });
//   };
// };
