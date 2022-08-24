import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Homepage from "./routes/Homepage";
import React from "react";
import Navbar from "./components/Navbar.components";
import Person from "./routes/Person.route";
import Profile from "./routes/Profile.route";
import Blog from "./routes/Blog.components";
import Blogdetail from "./routes/Blog-Detail";
import NotFound from "./routes/no-routes";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/person" element={<Person />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Blogdetail />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
