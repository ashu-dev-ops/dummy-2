import React from "react";
import Filters from "../components/Filters";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";

const Home = () => {
  // const {
  //   state: { products },
  //   productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  // } = CartState();
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = CartState();
  console.log(products);
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div className="home">
      {/* <h1>home page</h1> */}
      <Filters />
      <div className="productContainer">
        {transformProducts().map((i) => {
          const { id, name } = i;
          return <SingleProduct key={id} prod={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
