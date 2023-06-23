import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../Components/Layout/Layout';
import Home from '../Components/Home/Home';
import Movies from '../Components/Movies/Movies';
import TVSeries from '../Components/TVSeries/TVSeries';
import ItemDetails from '../Components/ItemDetails/ItemDetails';
import ViewAll from '../Components/ViewAll/ViewAll';
import { Offline } from 'react-detect-offline';

export default function App() {
  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/movies', element: <Movies /> },
        { path: '/tvseries', element: <TVSeries /> },
        { path: '/itemdetails/:media_type/:id', element: <ItemDetails /> },
        { path: '/viewall/:media_type/:category', element: <ViewAll /> },
      ]
    }
  ])

  return (
    <>
      <Offline><div className='alert alert-danger'>You are Offline</div></Offline>
      <RouterProvider router={routers} />
    </>
  );
}
