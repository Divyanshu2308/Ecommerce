import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
export default function Homepage() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}
