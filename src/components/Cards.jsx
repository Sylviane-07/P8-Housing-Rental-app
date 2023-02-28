import { Link } from "react-router-dom";

function Cards({ id, cover, title }) {
  const path = `for-rent/${id}`
  return (
    <article key={id} className="card__item">
      <Link to={path}>
        <img src={cover} alt={title} className="card__img" />
        <h3 className="card__title">{title}</h3>
      </Link>
    </article>
  );
}

export default Cards;
