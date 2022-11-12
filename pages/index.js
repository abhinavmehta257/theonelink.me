import Head from "next/head";
import onLoad from "../js/main.js";
import { useEffect } from "react";
import Link from "next/link.js";
import NavBar from "../components/NavBar.js";
import HeroSection from "../components/HeroSection.js";
import FeatureSection from "../components/FeatureSection.js";
import Feature2Section from "../components/Feature2Section.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <Feature2Section />
      <Footer />
    </>
  );
}
