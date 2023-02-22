import CartContext from './ctx-obj';
import { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //action.value === fruit
    let updatedItems;
    const fruitInCart = state.items.find(
      (fruit) => fruit.id === action.value.id
    );
    const fruit = { ...action.value };

    if (fruitInCart) {
      fruitInCart.items += 1;
      updatedItems = state.items.concat();
    } else {
      fruit.items = 1;
      updatedItems = state.items.concat(fruit); //returns new array
    }
    console.log(fruit, '...fruit');
    //fruit.items

    console.log(updatedItems, ' from Provider');
    const updatedTotalAmount = state.totalAmount + action.value.price;
    return {
      //new state
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
  const removeItemHandler = () => {};
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
