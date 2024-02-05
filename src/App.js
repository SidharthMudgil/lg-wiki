import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import MainContent from './pages/homeScreen/MainContent';

import Layout from './pages/leftNavigation/Layout';
import NavigatorHeader from './pages/navigationHeader/NavigationHeader';
import Architecture from './pages/architecture/Architecture';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavigatorHeader />}>
        <Route path='' element={(<MainContent />)} />
        <Route path='arc' element={<Architecture />} />

        <Route path='docs' element={<Layout />}>
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
