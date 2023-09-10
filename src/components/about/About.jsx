import React, { useState } from "react";
import Button from "../button/Button";

function About({ title }) {
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
        {title === "Oral Disintergrating Film" ? (
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
                <Button  title="More About Us" />
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
                <Button  title="More About Us" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default About;
