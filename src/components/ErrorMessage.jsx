import { Link } from "react-router-dom";

function ErrorMessage() {
    return (
      <section className="error-page">
        <div className="error-page__text-container">
          <h2 className="error-page__title">404</h2>
          <p className="error-page__p">Oups! La page que <br/> vous demandez n'existe pas.</p>
        </div>
        <Link to="/" className="error-page__link">Retourner sur la page d’accueil</Link>
      </section>
    );
}

export default ErrorMessage
