import React from "react";
import Slider from "../main/Slider";
import Services from "../main/Service";
import Portfolio from "../main/Portfolio";
import Resume from "../main/Resume";
import Testimonial from "../main/Testimonial";
import Tech from "../main/Tech";
import Blog from "../main/Blog";
import Contacts from "../main/Contacts";

function MainWrapper() {
  return <>
    {/* Start Main Page Wrapper */}
    <main className="main-page-wrapper">
      <Slider />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Tech />
      <Blog />
      <Contacts />
    </main>
    {/* End Main Page Wrapper */}
  </>;
}

export default MainWrapper;
