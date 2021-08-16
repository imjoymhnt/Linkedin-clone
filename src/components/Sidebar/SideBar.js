import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./SideBar.css";

const SideBar = () => {
  const user = useSelector(selectUser);

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
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
