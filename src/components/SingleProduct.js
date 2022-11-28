import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
// or props & use use like prop.prod.name
const SingleProduct = ({ prod }) => {
  const {
    // state is an object that contains the cart
    // we are destructing the the state and taking cart out of it
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} />
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹ {prod.price.split(".")[0]}</span>
          {/* conditional rendering */}
          {prod.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>4 days delivery</div>
          )}

          <Rating rating={prod.ratings} />
        </Card.Subtitle>
        {cart.some((p) => p.id === prod.id) ? (
          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
            }
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
            disabled={!prod.inStock}
          >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
        {/* in react we have built in disable prop */}
        {/* disable the button if the in prod.inStock is 0 */}
      </Card>
      {/* <h1>{prod.name}</h1> */}
    </div>
  );
};

export default SingleProduct;
