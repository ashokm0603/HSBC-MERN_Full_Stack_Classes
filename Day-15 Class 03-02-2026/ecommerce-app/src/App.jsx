import React from "react";
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AddProduct } from "./pages/AddProduct";
import "./App.css"
import { Nav } from "./pages/Nav";
import { ViewProducts } from "./pages/ViewProducts";
import 'bootstrap/dist/css/bootstrap.min.css';

import EditProduct from "./pages/EditProduct";

 const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="addproduct" element={<AddProduct/>}/>
        <Route path="viewproducts" element={<ViewProducts/>}/>
        <Route path="editproduct" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;