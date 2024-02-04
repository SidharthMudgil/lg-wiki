import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import MainContent from './pages/homeScreen/MainContent';

import Layout from './pages/leftNavigation/Layout';
import NavigatorH from './pages/navigationHeader/NavigationHeader';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavigatorH />}>
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
