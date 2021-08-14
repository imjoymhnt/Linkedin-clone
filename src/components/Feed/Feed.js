import { createSvgIcon } from "@material-ui/core";
import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption/InputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e4c159" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#fc9295"
          />
        </div>
      </div>
      {/* Post  */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Mritunjoy Mahanta"
        description="some description"
        message="Some random message"
      />
    </div>
  );
};

export default Feed;
