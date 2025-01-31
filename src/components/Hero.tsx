import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
/*import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";*/
import Footer from "./Footer";

export default function Hero({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Function;
}) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("nd-theme");
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : defaultTheme,
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Ryan Paul</title>
        <meta
          name="description"
          content="I am a Software Engineer and Web Developer. This is my portfolio website."
        />
        <link rel="icon" href="/HeroLogo.png" />
        <link rel="canonical" href="https://ryanpaul.dev/" />
      </Helmet>

      <Navbar
        theme={theme}
        setTheme={setTheme}
        navbarMargin={{
          marginLeft:
            "ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/HeroLogo.png"
        menu={["Home"]}
      />
      {/* menu={["Home", "Skills", "Portfolio", "Contact"]} */}

      <Home
        h2Title="Hello, I'm"
        h1Title="Ryan Paul"
        typedInfo={{
          textBefore: "A",
          strings: ["Software Engineer", "Web Developer", "Code Wrangler", "Bug Hunter", "Stack Overflower", "Pixel Pusher", "Dev Ninja", "Digital Blacksmith"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
        }}
        internalLink={{
          to: "portfolio",
          text: "View Portfolio",
        }}
        externalLinks={[
          {
            link: "https://github.com/ryanpauldev",
            image: FaGithub,
            text: "",
          },
          {
            link: "https://www.linkedin.com/in/ryan-paul-dev/",
            image: FaLinkedin,
            text: "",
          },
        ]}
      />
      {/*<Skills />
      <Portfolio />
      <Contact
        title={
          <>
            Contact <span className="text-highlight">Me</span>
          </>
        }
      />*/}
      <Footer />
    </>
  );
}