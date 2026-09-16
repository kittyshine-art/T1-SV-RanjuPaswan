
import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";




const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Services/>
      </main>

      <Footer/>

      
    </>
  );
};

export default LandingPage;
