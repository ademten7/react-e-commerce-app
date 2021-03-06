import React, { useContext, useRef, useEffect } from "react";
import "./Home.scss";
import "../../Carousel/Carousel";
import Carousel from "../../Carousel/Carousel";
import { init } from "ityped";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/context";
import ReactStars from "react-rating-stars-component";
import { MdShoppingCart } from "react-icons/md";
import Filter from "../../components/FilterProducts/Filter";
import Search from "../../components/Search/Search";

const Home = () => {
  const { products, bag, setBag } = useContext(MyContext);
  let { quantity, setQuantity } = useContext(MyContext);
  const textRef = useRef();
  const addToBag = (item) => {
    let addedItem = bag.find((product) => product.title === item.title);
    if (addedItem) {
      addedItem.number++;
      quantity++;
      setQuantity(quantity);
      setBag([...bag]);
    } else {
      item.number = 1;
      setBag([...bag, item]);
      quantity++;
      setQuantity(quantity);
    }
  };
  console.log(bag);

  //Typed Text
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 20,
      typeSpeed: 50,
      strings: [
        "WELCOME HAKK ONLINE SHOP ",
        "Men",
        "Women",
        "Kids",
        "And More...",
      ],
    });
    // import { init } from "ityped";
  }, []);

  return (
    <div className="container">
      <div className="main-header">
        <h1>
          <span className="h1-span" ref={textRef}></span>
        </h1>
      </div>
      <section>
        <Carousel />
      </section>
      <Filter />
      <div style={{ marginTop: "4em" }}>
        <Search />
      </div>
      <div id="home-page-products" className="product-all">
        {products.map((product) => {
          return (
            <div key={product.id} className="home-products">
              <div className="card-items">
                <Link
                  className="text-decoration"
                  to={`/singleProduct/${product.id}`}
                >
                  <h2 className="headers">{product.title}</h2>
                </Link>
                <div>
                  <img
                    className="product-image"
                    src={product.image}
                    alt=""
                    width="200"
                  />
                </div>
                <h1 className={product.price >= 100 ? "sale" : "normal"}>
                  ${product.price}
                </h1>
                <ReactStars
                  count={5}
                  size={18}
                  activeColor="#ffd700"
                  value={product.rating.rate}
                  isHalf={true}
                  edit={false}
                />
                <button
                  className="btn add-to-bag"
                  onClick={() => addToBag(product)}
                >
                  <MdShoppingCart /> Add To Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
