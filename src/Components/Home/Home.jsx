import React from "react";
import Brief from "../Brief/Brief";
import HeaderLanding from "../HeaderLanding/HeaderLanding";
import SocialNav from "../SocialNav/SocialNav";
import CanavesNavBar from "../CanavesNavBar/CanavesNavBar";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import News from "../News/News";
import Hire from "../Hire/Hire";
import Mapps from "../Mapps/Mapps";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      <SocialNav />
      <CanavesNavBar />
      <HeaderLanding />
      <Brief />
      <Services />
      <Projects />
      <News />
      <Hire />
      <Mapps />
      <Footer />
    </>
  );
};

export default Home;
