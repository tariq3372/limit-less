import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/layouts/2.png";
import img2 from "../../assets/images/layouts/3.png";
import img3 from "../../assets/images/layouts/4.png";
import img4 from "../../assets/images/layouts/5.png";

function Project3() {
  const [data, setData] = useState([
    {
      id: 1,
      img: img1,
      title: "Red Sheild",
      price: 55,
      stock: true
    },
    {
      id: 2,
      img: img2,
      title: "Zink",
      price: 37,
      stock: false
    },
    {
      id: 3,
      img: img3,
      title: "Vitamine C",
      price: 42,
      stock: false
    },
    {
      id: 4,
      img: img4,
      title: "Glow Collagen",
      price: 49,
      stock: false
    },
  ]);
  return (
    <section className="nft">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter">
              <form action="#" className="widget-search">
                <input
                  type="text"
                  placeholder="Search item here..."
                  required=""
                />
                <Link to="#" className="btn-search">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.7659"
                      cy="9.76639"
                      r="8.98856"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                    <path
                      d="M16.0176 16.4849L19.5416 19.9997"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </form>
              <div id="category" className="dropdown">
                <Link to="#" className="btn-selector nolink ">
                  All categories
                </Link>
                <ul className="">
                  <li>
                    <span>All Items</span>
                  </li>
                  <li>
                    <span>Bundles</span>
                  </li>
                </ul>
              </div>
              <div id="buy" className="dropdown">
                <Link to="#" className="btn-selector nolink ">
                  Buy now
                </Link>
                <ul className="">
                  <li>
                    <span>All Items</span>
                  </li>
                  <li>
                    <span>Bundles</span>
                  </li>
                </ul>
              </div>
              <div id="item" className="dropdown">
                <Link to="#" className="btn-selector nolink ">
                  All item
                </Link>
                <ul className="">
                  <li>
                    <span>All Items</span>
                  </li>
                  <li>
                    <span>Bundles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {data.map((idx) => (
            <div key={idx.id} className="col-xl-3 col-md-6">
              <div className="nft-item">
                <div className="card-media">
                  <Link to="#">
                    <img src={idx.img} alt="LimitLess" />
                  </Link>
                </div>
                <div className="card-title d-flex justify-content-between">
                  <Link to="#" className="h5">
                    {idx.title}
                  </Link>
                  {idx?.stock === false && (
                  <span>
                    Out of stock
                  </span>
                  )}
                </div>
                <div className="card-bottom style-explode">
                  <div className="price">
                    <div className="price-details">
                      <span>Price</span>
                      <h6>{idx.price} Dollar</h6>
                    </div>
                  </div>
                  <div className="button-place-bid">
                    <Link
                      to=""
                      onClick={() => window.open(`https://wa.me/971508224920?text=Interested in ${idx?.title}`)}
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="sc-button"
                    >
                      <span>Buy Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project3;
