//Banner IMG
import { useLocation } from "react-router-dom";
//import { useEffect } from "react";

//IMG
import homepageBanner from "./../assets/Banner_M.png";
import aboutBanner from "./../assets/About_Banner_M.png";

function Banner() {
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  if (location.pathname === "/") {
    return (
      <div className="header-banner">
        <img
          className="header-banner__img"
          src={homepageBanner}
          alt="Coast landscape"
        />
        <h1 className="header-banner--text">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
    );
  } else if (location.pathname === "/about") {
    return (
      <div className="about-banner">
        <img
          className="about-banner__img"
          src={aboutBanner}
          alt="Mountain landscape"
        />
      </div>
    );
  }
}

export default Banner;
