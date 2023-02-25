import CartContext from './ctx-obj';
import { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      Math.round(
        (state.totalAmount + action.value.price * action.value.amount) * 100
      ) / 100;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    let updatedItem;
    let updatedItems;

    if (existingItemIndex !== -1) {
      const existingItem = state.items[existingItemIndex];
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.value]; //returns new array
    }

    return {
      //new state
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      Math.round((state.totalAmount - existingItem.price) * 100) / 100; //or with 1.20 it gave diff result

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.value); //remove item
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', value: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', value: id });
  };
  const cartCTX = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartCTX}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
