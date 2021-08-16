import { createSvgIcon } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption/InputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(posts);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
