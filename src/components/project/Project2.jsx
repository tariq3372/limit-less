import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import img1 from "../../assets/images/layouts/2.png";
import img2 from "../../assets/images/layouts/3.png";
import img3 from "../../assets/images/layouts/4.png";
import img4 from "../../assets/images/layouts/5.png";

function Project2() {
  const [data, setData] = useState([
    {
      id: 1,
      img: img1,
      title: "Red Sheild",
    },
    {
      id: 2,
      img: img2,
      title: "Zink",
    },
    {
      id: 3,
      img: img3,
      title: "Vitamine C",
    },
    {
      id: 4,
      img: img4,
      title: "Glow Collagen",
    },
  ]);
  const [dataBlock] = useState({
    subheading: "Our Products",
    heading: "OUR COLLECTION",
  });
  return (
    <section className="project s2">
      <div className="shape right"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading ">{dataBlock.heading}</h3>
            </div>
          </div>

          {data.map((idx) => (
            <div key={idx.id} className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image">
                  <Link to="/collection">
                    <img src={idx.img} alt="LimitLess" />
                  </Link>
                </div>
                <div className="content">
                  <Link to="/collection" className="h5 title">
                    {idx.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="button mt-0">
            <Button title="View All COLLECTION" link="/collection" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project2;
