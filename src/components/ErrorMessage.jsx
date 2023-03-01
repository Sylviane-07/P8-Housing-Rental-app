import { Link } from "react-router-dom";

function ErrorMessage({title, p, link}) {
    return (
      <section className="error-page">
        <div className="error-page__text-container">
          <h2 className="error-page__title">{title}</h2>
          <p className="error-page__p">{p}</p>
        </div>
        <Link to="/" className="error-page__link">{link}</Link>
      </section>
    );
}

export default ErrorMessage
