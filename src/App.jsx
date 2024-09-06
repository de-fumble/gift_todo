import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import TodayTask from "./components/Main/TodayTask";
import Settings from "./components/Main/Settings";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TodayTask" element={<TodayTask />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
