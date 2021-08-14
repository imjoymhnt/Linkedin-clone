import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
          alt=""
        />
        <Avatar src="https://i.ibb.co/x1FkywK/IMG20210713202551.jpg" />
        <h2>Mritunjoy Mahanta</h2>
        <h4>mritunjooy.mahanta001@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3625</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2356</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("nodejs")}
        {recentItem("programming")}
        {recentItem("python")}
        {recentItem("django")}
        {recentItem("flask")}
      </div>
    </div>
  );
};

export default SideBar;
