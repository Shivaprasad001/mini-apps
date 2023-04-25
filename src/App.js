import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import CalculatorPage from './pages/Calculator';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {path:'/', element:<HomePage/>},
      {path:'/calculator', element: <CalculatorPage/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
