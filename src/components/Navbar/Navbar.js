import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { MyContext } from "../../Context/context";

export default function Navbar() {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const { user, quantity, setProducts, data } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //onChange
  // const searchProduct = (e) => {
  //   console.log(e.target.value);
  //   let searchedProducts = products.filter((product) =>
  //     product.title.includes(e.target.value)
  //   );
  //   setProducts(searchedProducts);
  // };

  //useRef()
  const searchValue = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.searchItem.value);

    let updatedProducts = data.filter(
      (product) =>
        product.category
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase()) ||
        product.title
          .toLowerCase()
          .includes(inputRef.current.searchItem.value.toLowerCase())
    );
    setProducts(updatedProducts);
    inputRef.current.searchItem.value = "";
  };

  return (
    <nav className="Navbar">
      <div className="NavList-left">
        <Link to="/">
          <div className="Logo">
            <img width="100" src="./images/Logo.png" alt="" />
          </div>
        </Link>
        <ul className="List-left">
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/women"
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/men"
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/kids"
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="NavList-right">
        <div id="shopNow" className="search-bar">
          <div className="icon">
            <form onSubmit={searchValue} ref={inputRef}>
              <div>
                <div className="BarSearch">
                  <input
                    // onChange={searchProduct}
                    onFocus={() => setProducts(data)}
                    className="search"
                    type="text"
                    name="searchItem"
                    //name is important for useREf
                    placeholder="Search products"
                  />

                  <button className="btn-search" type="submit" name="search">
                    <FiSearch size="25px" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div>
            {user ? (
              <Link to="/profile">
                <BsFillPersonCheckFill />
                Welcome {user.displayName}
              </Link>
            ) : (
              <NavLink
                className={(node) =>
                  node.isActive ? "myActiveClass" : "myNotActiveClass"
                }
                to="/login"
              >
                <BiLogIn /> Login
              </NavLink>
            )}
          </div>

          <div>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/contact"
            >
              <button className="btn-contact" onClick={handleShow}>
                <GrContact /> Contact
              </button>
            </NavLink>

            <Modal size="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Contact />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/shoppingBag"
            >
              <FiShoppingCart /> Shopping bag{" "}
              <span className="quantity">{quantity}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
