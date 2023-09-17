import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import redSheild from "../assets/images/layouts/red-sheild.jpg";
import zink from "../assets/images/layouts/Zfilm.jpg";
import cflim from "../assets/images/layouts/Cfilm.jpg";
import glow from "../assets/images/layouts/glow.jpg";
import limitless from "../assets/images/layouts/limtlessss.jpg";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(
    id == 1
      ? redSheild
      : id == 2
      ? zink
      : id == 3
      ? cflim
      : id == 4
      ? glow
      : limitless
  );
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="wrapper">
      <section className="nft">
        <div className="container">
          {id == 1 ? (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={redSheild}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pt-sm-0">
                <div style={{ width: "100%" }}>
                  <h3 className="heading">Red Shield</h3>
                  <hr />
                  <div className="mt-17">
                    <h4 className="heading">
                      <span
                        style={{
                          background:
                            "linear-gradient(264.28deg, #0291f7 -38.2%, #0058c6 103.12%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SAR 207
                      </span>
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          color: "#999",
                          fontSize: "25px",
                          fontWeight: "normal",
                          marginLeft: "10px",
                        }}
                      >
                        SAR 319
                      </span>
                    </h4>
                    <p className="mt-2 fs-17">In stock</p>
                    <p className="mt-4 fs-17">
                      At Limitless Health and Wellness, we're committed to
                      excellence. Red Shield reflects our dedication with
                      rigorous testing and the finest ingredients, ensuring top
                      quality for your health. Trust Red Shield for exceptional
                      benefits.
                    </p>
                    <hr />
                    <div className="mt-4 d-flex gap-5">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => {
                            quantity > 1 && setQuantity(quantity - 1);
                          }}
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "+") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <Link
                        onClick={() =>
                          window.open(
                            `https://wa.me/971508224920?text=Interested in Red Shield`
                          )
                        }
                        className="new-sc-button"
                        style={{ color: "white" }}
                      >
                        <span>Buy Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-25">
                    <ul style={{ padding: "0px 15px" }}>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Enhanced Blood Flow & Memory
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Immunity Improvement
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Fatigue Relief
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Anti-oxidation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : id == 2 ? (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={zink}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pt-sm-0">
                <div style={{ width: "100%" }}>
                  <h3 className="heading">Zink</h3>
                  <hr />
                  <div className="mt-17">
                    <h4 className="heading">
                      <span
                        style={{
                          background:
                            "linear-gradient(264.28deg, #0291f7 -38.2%, #0058c6 103.12%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SAR 139
                      </span>
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          color: "#999",
                          fontSize: "25px",
                          fontWeight: "normal",
                          marginLeft: "10px",
                        }}
                      >
                        SAR 214
                      </span>
                    </h4>
                    <p className="mt-2 fs-17" style={{ background: "#ffebe8", color:"#fc3e3e", fontWeight: "600", width: "fit-content", padding: "5px", borderRadius: "6px" }}>Out of stock</p>
                    <p className="mt-4 fs-17">
                      Our Zinc supplement reflects our commitment to quality,
                      purity, and potency. Trust Zinc from Limitless Health and
                      Wellness for superior health benefits.
                    </p>
                    <hr />
                    <div className="mt-4 d-flex gap-5">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => {
                            quantity > 1 && setQuantity(quantity - 1);
                          }}
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "+") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <Link
                        onClick={() =>
                          window.open(
                            `https://wa.me/971508224920?text=Interested in Zink`
                          )
                        }
                        className="new-sc-button"
                        style={{ color: "white" }}
                      >
                        <span>Buy Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-25">
                    <ul style={{ padding: "0px 15px" }}>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Absorption & bioavailability of the nutrients
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Anti-inflammatory
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Antibacterial
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Antiviral
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : id == 3 ? (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={cflim}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pt-sm-0">
                <div style={{ width: "100%" }}>
                  <h3 className="heading">Vitamine C</h3>
                  <hr />
                  <div className="mt-17">
                    <h4 className="heading">
                      <span
                        style={{
                          background:
                            "linear-gradient(264.28deg, #0291f7 -38.2%, #0058c6 103.12%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SAR 158
                      </span>
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          color: "#999",
                          fontSize: "25px",
                          fontWeight: "normal",
                          marginLeft: "10px",
                        }}
                      >
                        SAR 229
                      </span>
                    </h4>
                    <p className="mt-2 fs-17" style={{ background: "#ffebe8", color:"#fc3e3e", fontWeight: "600", width: "fit-content", padding: "5px", borderRadius: "6px" }}>Out of stock</p>
                    <p className="mt-4 fs-17">
                      Vitamin C, an essential nutrient, is renowned for its
                      potent antioxidant properties, aiding in immune support
                      and overall health. Foods like citrus fruits and bell
                      peppers, high in vitamin C, can be key to maintaining your
                      well-being.{" "}
                    </p>
                    <hr />
                    <div className="mt-4 d-flex gap-5">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => {
                            quantity > 1 && setQuantity(quantity - 1);
                          }}
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "+") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <Link
                        onClick={() =>
                          window.open(
                            `https://wa.me/971508224920?text=Interested in Vitamine C`
                          )
                        }
                        className="new-sc-button"
                        style={{ color: "white" }}
                      >
                        <span>Buy Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-25">
                    <ul style={{ padding: "0px 15px" }}>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Boosts Immune System
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Improves Skin Health
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Powerful Antioxidant
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Collagen Production
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : id == 4 ? (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={glow}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pt-sm-0">
                <div style={{ width: "100%" }}>
                  <h3 className="heading">Glow Collagen</h3>
                  <hr />
                  <div className="mt-17">
                    <h4 className="heading">
                      <span
                        style={{
                          background:
                            "linear-gradient(264.28deg, #0291f7 -38.2%, #0058c6 103.12%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SAR 184
                      </span>
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          color: "#999",
                          fontSize: "25px",
                          fontWeight: "normal",
                          marginLeft: "10px",
                        }}
                      >
                        SAR 237
                      </span>
                    </h4>
                    <p className="mt-2 fs-17" style={{ background: "#ffebe8", color:"#fc3e3e", fontWeight: "600", width: "fit-content", padding: "5px", borderRadius: "6px" }}>Out of stock</p>
                    <p className="mt-4 fs-17">
                      Glow Collagen is a premium skincare supplement designed to
                      enhance your natural radiance. Packed with essential
                      ingredients like collagen and vitamin C, it promotes
                      youthful skin, reducing the appearance of fine lines and
                      wrinkles. Incorporate Glow Collagen into your daily
                      routine for a revitalized complexion that radiates health
                      and beauty.
                    </p>
                    <hr />
                    <div className="mt-4 d-flex gap-5">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => {
                            quantity > 1 && setQuantity(quantity - 1);
                          }}
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "+") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <Link
                        onClick={() =>
                          window.open(
                            `https://wa.me/971508224920?text=Interested in Glow Collagen`
                          )
                        }
                        className="new-sc-button"
                        style={{ color: "white" }}
                      >
                        <span>Buy Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-25">
                    <ul style={{ padding: "0px 15px" }}>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Moisturize the skin
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Tighten the skin
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Reduce wrinkles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : id == 5 ? (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div
                  style={{ width: "100%", height: "100%", maxHeight: "600px" }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={activeImage}
                  />
                </div>
                {/* <div className="row pt-4">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-3">
                    <div
                      style={{ width: "100%", height: "100%" }}
                      onClick={() => setActiveImage(limitless)}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          cursor: "pointer",
                          boxShadow:
                            activeImage == limitless
                              ? "rgba(0, 88, 198) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 88, 198) 0px -3px 0px inset"
                              : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                        }}
                        src={limitless}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-3">
                    <div
                      style={{ width: "100%", height: "100%" }}
                      onClick={() => setActiveImage(redSheild)}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          cursor: "pointer",
                          boxShadow:
                            activeImage == redSheild
                              ? "rgba(0, 88, 198) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 88, 198) 0px -3px 0px inset"
                              : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                        }}
                        src={redSheild}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-3">
                    <div
                      style={{ width: "100%", height: "100%" }}
                      onClick={() => setActiveImage(zink)}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          cursor: "pointer",
                          boxShadow:
                            activeImage == zink
                              ? "rgba(0, 88, 198) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 88, 198) 0px -3px 0px inset"
                              : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                        }}
                        src={zink}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-3">
                    <div
                      style={{ width: "100%", height: "100%" }}
                      onClick={() => setActiveImage(glow)}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                          borderRadius: "10px",
                          boxShadow:
                            activeImage == glow
                              ? "rgba(0, 88, 198) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 88, 198) 0px -3px 0px inset"
                              : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                        }}
                        src={glow}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pt-sm-0"
                // style={{ marginTop: width < 766 && "5rem" }}
              >
                <div style={{ width: "100%" }}>
                  <h3 className="heading">LimitLess</h3>
                  <hr />
                  <div className="mt-17">
                    <h4 className="heading">
                      <span
                        style={{
                          background:
                            "linear-gradient(264.28deg, #0291f7 -38.2%, #0058c6 103.12%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        SAR 226
                      </span>
                      <span
                        style={{
                          textDecorationLine: "line-through",
                          textDecorationThickness: "1px",
                          color: "#999",
                          fontSize: "25px",
                          fontWeight: "normal",
                          marginLeft: "10px",
                        }}
                      >
                        SAR 271
                      </span>
                    </h4>
                    <p className="mt-2 fs-17" style={{ background: "#ffebe8", color:"#fc3e3e", fontWeight: "600", width: "fit-content", padding: "5px", borderRadius: "6px" }}>Out of stock</p>
                    <p className="mt-4 fs-17">
                      Limitless Erectile Dysfunction delivers a transformative
                      solution for enhanced sexual performance. Expect a more
                      robust and enduring erection, igniting your desire and
                      self-assurance. Bid farewell to restrictions with our
                      daily-use formula, which extends your sexual stamina.
                      Unlock newfound intimacy and relationships with ease,
                      thanks to Limitless Erectile Dysfunction's remarkable
                      benefits.
                    </p>
                    <hr />
                    <div className="mt-4 d-flex gap-5">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => {
                            quantity > 1 && setQuantity(quantity - 1);
                          }}
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "+") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            style={{ color: "black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <Link
                        onClick={() =>
                          window.open(
                            `https://wa.me/971508224920?text=Interested in Limit Less`
                          )
                        }
                        className="new-sc-button"
                        style={{ color: "white" }}
                      >
                        <span>Buy Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-25">
                    <ul style={{ padding: "0px 15px" }}>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Erectile dysfunction
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Stronger erection
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Longer sex drive
                      </li>
                      <li style={{ listStyleType: "disc" }} className="fs-17">
                        Daily use
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <div className="mb-58" />
      <Footer />
    </div>
  );
};

export default SingleProduct;
