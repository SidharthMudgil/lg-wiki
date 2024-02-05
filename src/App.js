import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import MainContent from './pages/homeScreen/MainContent';

import Layout from './pages/header/leftNavigation/Layout';
import NavigatorHeader from './pages/homeScreen/navigationHeader/NavigationHeader';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavigatorHeader />}>
        <Route path='' element={(<MainContent />)} />

        <Route path='docs' element={<Layout />}>
          <Route path='' element={(<></>)} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
