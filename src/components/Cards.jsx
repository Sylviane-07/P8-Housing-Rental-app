import { Link } from "react-router-dom";

function Cards({ id, cover, title }) {
  // dynamic page id path
  const path = `for-rent/${id}`
  return (
    <article className="skeleton__card card__item">
      <Link to={path}>
        <img src={cover} alt={title} className=" skeleton card__img" />
        <h3 className="card__title">{title}</h3>
      </Link>
    </article>
  );
}

export default Cards;
