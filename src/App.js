import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Maincontent from './pages/Main_content/Maincontent';

import Layout from './pages/layout/Layout';
import NavigatorH from './pages/Navigator/NavigatorH';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavigatorH />}>
        <Route path='' element={(<Maincontent />)} />

<<<<<<< HEAD
        <Route path='docs' element={<Layout />}>
          <Route path='' element={(<></>)} />
        </Route>
=======
       <Route path='Docs' element={<Layout />}>
        <Route path='' element={(<></>   )} />
</Route>
>>>>>>> 3b23d5c (added documentation part)
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
