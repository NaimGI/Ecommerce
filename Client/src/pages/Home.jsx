import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/slider";
import Categorie from "../components/Categorie";
import Products from "../components/Products";
import NewLetter from "../components/Newletter";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categorie />
      <Products />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Home;
