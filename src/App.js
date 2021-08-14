import React from "react";

import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
