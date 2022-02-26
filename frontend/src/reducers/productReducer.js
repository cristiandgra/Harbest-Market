const initalState = { products: [] };
export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case "@products/getProducts":
      return { ...state, products: action.payload };
    case "@products/getTotal":
      return { ...state, totalProducts: action.payload };
    case "@products/created":
      let newProducts = [...state.products];
      newProducts.push(action.payload);
      return { ...state, products: newProducts };
    case "@products/updated":
      let updatedProducts = [...state.products];
      updatedProducts = updatedProducts.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      return { ...state, products: updatedProducts };

    case "@products/deleted":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
