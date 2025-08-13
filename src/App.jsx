import { useState, useEffect } from "react";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  // Get theme from localStorage or default to true (dark mode ON)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <Hero />
      <Skills />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
