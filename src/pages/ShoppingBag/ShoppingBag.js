import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/context";
import { GiShoppingBag } from "react-icons/gi";
import { MdRemoveShoppingCart, MdDeleteSweep } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

import "./ShoppingBag.css";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Paypal from "../../components/Payment/Paypal";

const ShoppingBag = () => {
  const { bag, setBag, totalPrice, setTotalPrice } = useContext(MyContext);
  let { quantity, setQuantity } = useContext(MyContext);
  const [sumOfQuantity, setSumOfQuantity] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const total = bag.reduce((acc, curr) => {
      acc += curr.price * curr.number;
      return acc;
    }, 0);

    setTotalPrice(total);
    console.log(totalPrice);
  }, [bag, totalPrice, setTotalPrice]);

  console.log(totalPrice);

  //to remove only one item
  const removeOne = (item) => {
    let removeItem = bag.find((product) => product.id === item.id);
    if (removeItem.number === 1 || removeItem.number === 0) {
      quantity--;
      setQuantity(quantity);
      let updatedBag = bag.filter((product) => product.id !== item.id);
      setBag(updatedBag);
    } else {
      quantity--;
      setQuantity(quantity);
      removeItem.number--;
      setBag([...bag]);
    }
  };
  //to remove all items
  const removeAll = (item) => {
    let removedItems = bag.find((product) => product.id === item.id);
    let updatedBag = bag.filter((product) => product.id !== item.id);
    setBag(updatedBag);
    quantity -= removedItems.number;
    setQuantity(quantity);
  };
  //to calculate number of total quantity inside the bag
  useEffect(() => {
    const sumOfTheQuntity = bag.reduce((acc, item) => {
      acc += item.number;
      return acc;
    }, 0);
    console.log(sumOfTheQuntity);
    setSumOfQuantity(sumOfTheQuntity);
    console.log(sumOfQuantity);
  }, [bag, sumOfQuantity]);

  //clear Shopping Bag
  const clearShoppingBag = () => {
    quantity -= sumOfQuantity;
    console.log(quantity);
    setQuantity(quantity);
    setBag([]);
  };

  const decreaseQuantity = (item) => {
    let decreasedItem = bag.find((product) => product.id === item.id);
    if (decreasedItem.number === 0) {
      return;
    }
    if (decreasedItem.number === 1) {
      decreasedItem.number = 0;
      quantity--;
      setBag([...bag]);
      setQuantity(quantity);
    } else {
      decreasedItem.number--;
      quantity--;
      setBag([...bag]);
      setQuantity(quantity);
    }
  };
  const increaseQuantity = (item) => {
    let increasedItem = bag.find((product) => product.id === item.id);

    increasedItem.number++;
    quantity++;
    setBag([...bag]);
    setQuantity(quantity);
  };
  console.log(bag);
  return (
    <div className="cart container">
      <h1 className="cart-header">
        {" "}
        <GiShoppingBag className="cart-icon" />
        Shopping Bag
      </h1>
      <div className="cart-products">
        <div className="items">
          {bag.map((item) => {
            return (
              <div className="cart-product">
                <div className="image">
                  <img src={item.image} width="100" height="100" alt="" />
                </div>
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-quantity">
                    Piece: <span className="pieces">{item.number}</span>
                    <button
                      className="btn"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                  </p>
                </div>

                <div className="price">
                  <h1>${(item.number * item.price).toFixed(2)}</h1>
                </div>
                <div className="buttons">
                  <button onClick={() => removeOne(item)} className="btn">
                    <RiDeleteBinFill /> Remove One
                  </button>
                  <button onClick={() => removeAll(item)} className="btn">
                    <MdDeleteSweep /> Remove All
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-pay">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <div className="modal-button">
            <button onClick={clearShoppingBag} className="btn">
              <MdRemoveShoppingCart />
              Clear Shopping Bag
            </button>
            <Button variant="secondary" onClick={handleShow}>
              Pay
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Pay</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Paypal />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingBag;
