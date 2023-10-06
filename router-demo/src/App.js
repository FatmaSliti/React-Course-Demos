import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom"; //define routes
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error'
import ProductDetailPage from './pages/ProductDetail'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Products />} />
//     <Route />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)



// const router = createBrowserRouter([
//   {
//     path: "/root", //this route acts as a parent route for the routes inside the children and it acts as a wrapper to these routes
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/products", element: <Products /> },
//       { path: '/products/:productId', element: <ProductDetailPage /> } //route with a dynamic path segment
//     ]
//   },
// ]);


const router = createBrowserRouter([
  {
    path: "/", //this route acts as a parent route for the routes inside the children and it acts as a wrapper to these routes
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ //the paths below are called relative paths because we omitted the '/'
      { index: true, element: <HomePage /> }, //index route to define a default path displayed if the parent route's path is active / an alternative to path: ''
      { path: "products", element: <Products /> },
      { path: 'products/:productId', element: <ProductDetailPage /> } //route with a dynamic path segment
      //the product detail page route definiton is a child of the root route and a sibling to /products
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;




// { path: '/products/product-1', element: <ProductDetailPage /> },
// { path: '/products/product-2', element: <ProductDetailPage /> }
