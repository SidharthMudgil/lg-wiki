import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';


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
