import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnHome from "./EnComponents/Home/Home";
import ArHome from "./Components/Home/Home";
import ProjectDisplay from "./Components/ProjectDisplay/ProjectDisplay";
import ProjectDisplayEn from "./EnComponents/ProjectDisplay/ProjectDisplay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<EnHome />}></Route>
        <Route path="/" element={<ArHome />}></Route>
        <Route path="project/:id" element={<ProjectDisplay />}></Route>
        <Route path="en/project/:id" element={<ProjectDisplayEn />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
