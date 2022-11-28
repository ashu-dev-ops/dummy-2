import { createContext, useReducer, useContext } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./reducer";

const cart = createContext();
const Context = ({ children }) => {
  faker.seed(99); //dont change data on every refreash
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: products,
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  console.log(state);
  // important to send value as an object value={{obj}} or undefine
  return (
    <cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </cart.Provider>
  );
};
export const CartState = () => {
  return useContext(cart);
};

export default Context;
