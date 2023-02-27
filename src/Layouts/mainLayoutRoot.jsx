import { Outlet } from "react-router-dom"

//components
import Header from "./Header"
import Footer from "./Footer"

function MainLayoutRoot() {
  return (
    <>
      <Header />
      <main className="section-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayoutRoot;
