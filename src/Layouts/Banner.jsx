//Banner IMG
import { useLocation } from "react-router-dom";
//import { useEffect } from "react";

//IMG
import homepageBanner from "./../assets/Original_banner.png";
import homepageBannerMobile from "./../assets/Banner_M.png";
import aboutBanner from "./../assets/Original_About_banner.jpg";
import aboutBannerMobile from "./../assets/About_Banner_M.png";

function Banner() {
  //homepage banner img srcset
  const hpMobileBanner = `${homepageBannerMobile} 335w`;
  const hpDskBanner = `${homepageBanner} 1240w`;

  //about page banner img srcset
  const aboutMbBanner = `${aboutBannerMobile} 335w`;
  const aboutDskBanner = `${aboutBanner} 1240w`;

  //target browser path with useLocation & useEffect to change Banner based on location.pathname
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  if (location.pathname === "/") {
    return (
      <div className="header-banner">
        <picture className="header-banner">
          <source
            media="(max-width: 375px)"
            srcSet={hpMobileBanner}
            sizes="375px"
          />
          <source
            media="(max-width: 768px)"
            srcSet={hpDskBanner}
            sizes="768px"
          />
          <img
            className="header-banner__img"
            src={homepageBanner}
            alt="Coast landscape"
          />
        </picture>
        <h1 className="header-banner--text">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
    );
  } else if (location.pathname === "/about") {
    return (
      <div className="about-banner">
        <picture className="about-banner">
          <source
            media="(max-width: 375px)"
            srcSet={aboutMbBanner}
            sizes="375px"
          />
          <source
            media="(max-width: 768px)"
            srcSet={aboutDskBanner}
            sizes="768px"
          />
          <img
            className="about-banner__img"
            src={aboutBanner}
            alt="Mountain landscape"
          />
        </picture>
      </div>
    );
  }
}

export default Banner;
