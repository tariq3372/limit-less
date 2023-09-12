import React from "react";
import dataBox from "../assets/fake-data/data-box";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Speciality from "../components/speciality/Speciality";
import Project2 from "../components/project/Project2";
import dataItem from "../assets/fake-data/data-item";

function Home01() {
  return (
    <div className="home-1 wrapper">
      <Banner />
      <About title={"Red Sheild"} />
      <Project2 data={dataItem} />
      <About title={"Oral Disintergrating Film"} />
      <About title={"Zink"} />
      <Speciality data={dataBox} />
      <Footer />    
    </div>
  );
}

export default Home01;
