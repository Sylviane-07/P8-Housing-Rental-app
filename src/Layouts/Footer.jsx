import logo from "../assets/footer_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer
