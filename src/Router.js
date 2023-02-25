import {
createBrowserRouter, 
Route,
createRoutesFromElements,
RouterProvider, 
} from "react-router-dom";


//components
// import Header from "./components/Header";
// import Footer from "./components/Footer";

//Layouts
import MainLayoutRoot from "./Layouts/mainLayoutRoot";

//pages
import About from "./pages/About";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Housing from "./pages/Housing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayoutRoot />}>
      <Route path="/" element={<Homepage />} />
      <Route path="housing" element={<Housing />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
