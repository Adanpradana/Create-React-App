import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Homepage from "./routes/Homepage";
import React from "react";
import Navbar from "./components/Navbar.components";
import Person from "./routes/Person.route";
import Profile from "./routes/Profile.route";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/person" element={<Person />} />
      </Routes>
    </>
  );
}

export default App;
