import ErrorMessage from "../components/ErrorMessage"

function Error() {
    return (
      <>
        <ErrorMessage
          title={`404`}
          p={
            <>
              Oups! La page que <br className="error-page__br" /> vous demandez
              n'existe pas.
            </>
          }
          link={`Retourner sur la page d’accueil`}
        />
      </>
    );
}

export default Error