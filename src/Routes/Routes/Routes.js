import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Login from "../../Pages/forms/Login";
import Register from "../../Pages/forms/Register";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export const router = createBrowserRouter([
     {path:'/', element: <Main></Main>, children:[
          {
               path: '/', element: <Home></Home>,
               loader: () => fetch('http://localhost:5000/news')
          },
          {
               path: '/category/:id', 
               element: <Category></Category>,
               loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
               path: '/news/:id', element: <News></News>,
               loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
          },
          {
               path: '/login', element: <Login></Login>
          },
          {
               path: '/register', element: <Register></Register>
          }
     ]},
     {path: '*', element: <div className="text-center">404! Not Found</div>}
])