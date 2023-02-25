import { Outlet } from "react-router-dom"

//components
import Header from "./Header"
import Footer from "./Footer"

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
