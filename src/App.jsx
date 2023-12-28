import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListProduct from "./pages/products/ListProduct.jsx";
import AddProduct from "./pages/products/AddProduct.jsx";
import EditProduct from "./pages/products/EditProduct.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";

function App() {

  return (
      <>
        <Routes>
          <Route path={'products'} element={<Home/>}>
            <Route path={"home"} element={<ListProduct/>}/>
            <Route path={"add"} element={<AddProduct/>}/>
            <Route path={"edit/:id"} element={<EditProduct/>}/>
            <Route path={"details/:id"} element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
