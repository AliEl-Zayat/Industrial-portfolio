import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProjectDisplay from "./Components/ProjectDisplay/ProjectDisplay";
import SocialNav from "./Components/SocialNav/SocialNav";
import CanavesNavBar from "./Components/CanavesNavBar/CanavesNavBar";
const App = () => {
  return (
    <BrowserRouter>
      <SocialNav />
      <CanavesNavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<ProjectDisplay />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
