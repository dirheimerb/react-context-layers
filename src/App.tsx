import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section from "./components/Section";
import Post from "./components/Post";
import Profile from "./components/Profile";
import AllPosts from "./components/AllPosts";
import RecentPosts from "./components/RecentPosts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile />
    </>
  );
}

export default App;
