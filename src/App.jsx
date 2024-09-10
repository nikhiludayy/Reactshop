import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Details from "./Components/Details";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
