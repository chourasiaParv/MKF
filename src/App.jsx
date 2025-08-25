import React from "react";
import Header from "./Header/Header";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import MenuSection from "./MenuSection/MenuSection";
import ReservationsSection from "./ReservationsSection/ReservationsSection";
import Contact from "./ContactSection/Contact";
import Footer from "./Footer/Footer";
import './App.css'; // ✅ Fixed import

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="menu"><MenuSection /></section>
        <section id="contact"><Contact /></section>
        <section id="reservation"><ReservationsSection /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
