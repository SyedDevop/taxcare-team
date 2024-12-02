import React from "react";
import Hero from "../Components/Hero/Hero";
import OurService from "../Components/OurService/OurService";
import Reason from "../Components/ReasonSection/Reason";
import Statement from "../Components/Statement/Statement";

const Home: React.FC = () => {
  return (
    <section id="home">
      <Hero />
      <Reason />
      <OurService />
      <Statement />
    </section>
  );
};

export default Home;
