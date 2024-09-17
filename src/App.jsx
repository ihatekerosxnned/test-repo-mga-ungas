import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestSlider from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TestSlider />
      <About />
    </>
  );
}

export default App;
