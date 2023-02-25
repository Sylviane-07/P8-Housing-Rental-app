import { Outlet } from "react-router-dom"

//components
import Header from "../components/Header"
import Footer from "../components/Footer"

function MainLayoutRoot() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayoutRoot;
