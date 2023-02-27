import { useState } from "react";

function Collapase({ label, content }) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="collapse__container">
      <button className="collapse__btn" onClick={toggle}>
        {label}
        {open ? (
          open && <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </button>
      {open && (
        <div className="collapse__text-container">
          <p className="collapse__text">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapase;
