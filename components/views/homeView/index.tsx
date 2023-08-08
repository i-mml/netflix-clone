import React from "react";
import TopBox from "./components/topBox";
import Guide from "./components/guide";
import Faq from "./components/faq";
import Footer from "./components/footer";

const HomeView = () => {
  return (
    <main>
      <TopBox />
      <Guide />
      <Faq />
      <Footer />
    </main>
  );
};

export default HomeView;
