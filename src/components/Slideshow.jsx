import { useState } from "react";

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    //setting first pic index
    const isFirstPicture = currentIndex === 0;
    //if first pic go to last else -1
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handRightClick = () => {
    //setting last pic index
    const isLastPicture = currentIndex === pictures.length - 1;
    //if last pic go to first else +1
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const picStyles = {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: "10px",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundImage: `url(${pictures[currentIndex]})`,
  // }

  if (pictures.length <= 1) {
    return (
      <>
        <div className="Slideshow__container">
          <img className="Slideshow__img" src={pictures} alt={title} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Slideshow__container">
          {/* <div style={picStyles}></div> */}
          <img
            className="Slideshow__img"
            src={pictures[currentIndex]}
            alt={title}
          />
          <p className="Slideshow__bullets"></p>
          <button className="Slideshow__left-btn" onClick={handleLeftClick}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="Slideshow__right-btn" onClick={handRightClick}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </>
    );
  }
}

export default Slideshow;
