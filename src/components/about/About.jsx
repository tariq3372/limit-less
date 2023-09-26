import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import redSheildImage from "../../assets/images/layouts/red-sheild.jpg";

function About({ title }) {
  const [quantity, setQuantity] = useState(1);
  const [dataBlock] = useState({
    subheading: "Oral Disintergrating Film",
    heading: "Hight Quality",
    desc1:
      "Our specialized Oral Dissolving Films (ODF) provide a hassle-free intake method, dissolving on your tongue without water to deliver active ingredients swiftly for an effective wellness response.",
    desc2:"Our ODFs are a testament to our commitment to quality and your well-being. Crafted precisely, they dissolve on your tongue without water. Our high-grade active ingredients ensure efficient results, defining Limitless Health and Wellness' commitment to quality."
  });

  const [redSheild] = useState({
    subheading: "Red Sheild",
    heading: "Hight Quality",
    desc1: "Introducing Red Shield, a powerful 130mg supplement for overall well-being. Boost immunity, fight fatigue, and enhance memory with Red Shield.",
    desc2: "At Limitless Health and Wellness, we're committed to excellence. Red Shield reflects our dedication with rigorous testing and the finest ingredients, ensuring top quality for your health. Trust Red Shield for exceptional benefits."
  });

  const [zink] = useState({
    subheading: "Zink",
    heading: "Hight Quality",
    desc1: "Introducing our Zinc supplement, packed with antibacterial, antiviral, and anti-inflammatory properties. It enhances nutrient absorption and bioavailability for overall well-being.",
    desc2:
      "Our Zinc supplement reflects our commitment to quality, purity, and potency. Trust Zinc from Limitless Health and Wellness for superior health benefits.",
  });

  return (
    <section className="about">
      <div className="shape"></div>
      <div className="container">
        {/* {title === "Oral Disintergrating Film" ? (
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>{dataBlock.subheading}</span>
                </h6>
                <h3 className="heading">{dataBlock.heading}</h3>
                <p className="mb-17 fs-16">{dataBlock.desc1}</p>
                <p className="mb-26 fs-16">{dataBlock.desc2}</p>
                <Button title="More About Us" />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <img
                  src={require("../../assets/images/layouts/1.png")}
                  alt="LimitLess"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </div>
            </div>
          </div>
        ) : title === "Red Sheild" ? (
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <img
                  src={require("../../assets/images/layouts/2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                  alt="LimitLess"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>{redSheild.subheading}</span>
                </h6>
                <h3 className="heading">{redSheild.heading}</h3>
                <p className="mb-17 fs-16">{redSheild.desc1}</p>
                <p className="mb-26 fs-16">{redSheild.desc2}</p>
                <Button title="More About Us" />
              </div>
            </div>
          </div>
        ) : title === "Zink" ? (
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="portfolio__right">
                <img
                  src={require("../../assets/images/layouts/3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                  alt="LimitLess"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>{zink.subheading}</span>
                </h6>
                <h3 className="heading">{zink.heading}</h3>
                <p className="mb-17 fs-16">{zink.desc1}</p>
                <p className="mb-26 fs-16">{zink.desc2}</p>
                <Button title="More About Us" />
              </div>
            </div>
          </div>
        ) : null} */}
        <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-xl-5 pt-sm-0">
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "30px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={redSheildImage}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5">
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
      </div>
    </section>
  );
}

export default About;
