import "./App.css";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/prodctsPage.jsx";
import Products from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login">
            <Route index element={user ? <Navigate to="/" /> : <Login />} />
          </Route>
          <Route path="/products/:category">
            <Route index element={<ProductsPage />} />
          </Route>
          <Route path="/product/:id">
            <Route index element={<Products />} />
          </Route>
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>

          <Route path="/register">
            <Route index element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
