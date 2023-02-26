
//Banner IMG
import homepageBanner from "./../assets/Banner_M.png"
import aboutBanner from "./../assets/About_Banner_M.png"

function Banner() {

    return (
      <div className="header-banner">
        <img
          className="header-banner__img"
          src={homepageBanner}
          alt="Coast landscape"
        />
        <p className="header-banner--text">Chez vous,<br/> partout et ailleurs</p>
      </div>
    );
}

export default Banner
