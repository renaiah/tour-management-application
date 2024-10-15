import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import ErrorPage from './components/ErrorPage'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import SearchResultsList from './pages/SearchResultsList'
import Thankyou from './pages/Thankyou';
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/about",
          element:<About />,
        },
        {
          path:"/tours",
          element:<Tours />
        },
        {
          path:"/tours/:id",
          element:<TourDetails />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/tours/search",
          element:<SearchResultsList />
        },
        {
          path:"/thank-you",
          element:<Thankyou />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
