import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
          alt=""
        />
        <Avatar />
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
      </div>
    </div>
  );
};

export default SideBar;
