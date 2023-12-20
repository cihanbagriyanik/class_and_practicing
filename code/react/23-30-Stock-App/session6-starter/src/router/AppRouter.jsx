import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginMid from "../pages/LoginMid";
// import RegisterMid from "../pages/RegisterMid";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* middlewareli fonksiyonların olduğu sayfalar */}
        {/* <Route path="/" element={<LoginMid />} />
        <Route path="register" element={<RegisterMid />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            {/* nested route yapılarında index dediğimzde boş path vermemize gerek kalmaz. kapsayıcısının pathi geldğinde çalışır */}
            <Route index element={<Home/>}/>
            {/* Absolute Path */}
            {/* <Route path="/brands" element={<Brands/>}/> // bu şekilde bırakırsam bana şu hatayı verecektir=> Absolute route path "/products" nested under path "/stock/" is not valid. An absolute child route path must start with the combined path of all its parent routes. */}
            <Route path="/stock/brands" element={<Brands/>}/>
            {/* Relative Path */}
            <Route path="firms" element={<Firms/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="sales" element={<Sales/>}/>
            <Route path="purchases" element={<Purchases/>}/>
          </Route>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
