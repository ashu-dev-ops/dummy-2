import React, { useEffect, useState } from "react";
// import {
//   Button,
//   ButtonGroup,
//   Col,
//   Form,
//   Image,
//   ListGroup,
//   ListGroupItem,
//   Row,
// } from "react-bootstrap";
import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { AiFillAlert, AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    // use useEffect +reduc method for showing total price
    setTotal(
      // starting value of accumilater is zero
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  console.log(cart);

  return (
    <div>
      <div className="home">
        <ListGroup className="productContainer">
          {cart.map((i) => (
            <ListGroupItem key={i.id}>
              <Row>
                <Col md={2}>
                  <Image src={i.image} fluid></Image>
                </Col>
                <Col md={2}>
                  <span>{i.name}</span>
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={i.qty}
                    onChange={(e) => {
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: i.id,
                          // send form data through dispatch
                          qty: e.target.value,
                        },
                      });
                    }}
                  >
                    {/* here i.insstock is 6 */}
                    {[...Array(i.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: i,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        <div className="filters summary">
          <span className="title">{cart.length} items</span>
          <span style={{ fontSize: "3vw" }}>total amount = {total}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
