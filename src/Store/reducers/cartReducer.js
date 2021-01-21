const initialState = {
  cart: [],
};

// Reducer : nhan action tu user va xu ly
// export default (state = initialState, { type, payload }) => {
const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      // updateCart.push(product)
      // const updateCart = [...state.cart, product];
      // do mang va obj bi tham chieu, nen can clone ra truoc khi xu ly
      const updateCart = [...state.cart];

      const index = updateCart.findIndex((prod) => prod.id === product.id);
      if (index === -1) {
        updateCart.push(product);
      } else {
        updateCart[index].quantity += 1;
      }
      state.cart = updateCart;

      return { ...state };
    }

    case "DELETE_ITEM": {
      // sao chep gio hang ra mang moi
      const cartUpdate = [...state.cart];

      // xu ly xoa tren gio hang moi
      const index = cartUpdate.findIndex((prod) => prod.id === action.maSP);
      if (index !== -1) {
        cartUpdate.splice(index, 1);
      }
      // update lai state
      state.cart = cartUpdate;
      return { ...state };
    }

    case "CHANGE_QUANTITY": {
      const cartUpdate = [...state.cart];
      const index = cartUpdate.findIndex((prod) => prod.id === action.maSP);

      if (index !== -1) {
        if (action.tangGiam) {
          cartUpdate[index].quantity += 1;
        } else {
          if (cartUpdate[index].quantity > 1) {
            cartUpdate[index].quantity -= 1;
          } else {
            // cartUpdate[index].quantity = 1;
            alert("So luong toi thieu la 1");
          }
        }
      }

      state.cart = cartUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default cartReducer;
