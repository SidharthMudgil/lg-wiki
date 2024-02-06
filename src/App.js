import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainContent from "./pages/homeScreen/MainContent";
import Docs from "./pages/leftNavigation/Docs";
import Layout from "./pages/leftNavigation/Layout";
import NavigatorHeader from "./pages/navigationHeader/NavigationHeader";
import Architecture from "./pages/architecture/Architecture";

// All Routes for browsing in webpage

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavigatorHeader />}>
        <Route path="" element={<MainContent />} />
        <Route path="arc" element={<Architecture />} />

        <Route path="docs" element={<Layout />}>
        <Route path="title" element={<Docs />} />
     
       
     

        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
