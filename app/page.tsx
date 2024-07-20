"use client";
import { Fragment } from "react";
import HomeSliderComponent from "@/components/sliders/home-slider/HomeSlider";
import OverViewSection from "@/views/home/over-view-section/OverViewSection";
import ServicesComponent from "@/views/home/services/Services";
import { Container } from "@mui/material";
import DgftConsultancy from "@/views/home/dgft-consultancy/DgftConsultancy";
import AboutUsComponent from "@/views/home/about-us/AboutUs";
import WhyElite from "@/views/home/why-elite/WhyElite";
import OurClients from "@/views/home/our-clients/OurClients";
import TestimonialsComponent from "@/views/home/testimonials/Testimonials";

const HomePage = () => {
  return (
    <Fragment>
      <HomeSliderComponent />
      <Container disableGutters maxWidth="xl">
        <OverViewSection />
        <DgftConsultancy />
        <ServicesComponent />
        <AboutUsComponent />
        <WhyElite />
      </Container>
      <OurClients />
      <Container disableGutters maxWidth="xl">
        <TestimonialsComponent />
      </Container>
    </Fragment>
  );
};

export default HomePage;
