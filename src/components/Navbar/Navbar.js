import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";

import { BiLogIn } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { MyContext } from "../../Context/context";
import logo from "../../images/Logo.png";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { user, quantity } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="Navbar">
      <Link to="/">
        <div className="Logo">
          <img width="100" src={logo} alt="" />
        </div>
      </Link>
      <div className="NavList-left">
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
          <div className="login-profile">
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
                <BiLogIn />
                Login
              </NavLink>
            )}
          </div>

          <div>
            <button className="btn-contact" onClick={handleShow}>
              <GrMail /> Contact
            </button>
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
              <FiShoppingCart className="icon-bag" />
              <span className="quantity">{quantity}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
