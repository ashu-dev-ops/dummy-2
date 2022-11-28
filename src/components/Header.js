import { Badge, Dropdown, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

function Header() {
  const {
    state: { cart, productDispatch, dispatch },
  } = CartState();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">cart project</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/">
              home
            </Link>

            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />

            <Link className="link" to="/cart">
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart color="white" fontSize="25px" />

                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
              </Dropdown>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
