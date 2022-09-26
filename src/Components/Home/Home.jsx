import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
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
// import Loading from "../Loading/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";
const Home = () => {
  let [loading, setLoading] = useState(true);
  function loadingBody() {
    document.body.style.overflow = "visible";
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loadingBody();
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-wrapper">
          <CircleLoader
            color="var(--main-color)"
            loading={loading}
            size={150}
          />
        </div>
      ) : null}
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
