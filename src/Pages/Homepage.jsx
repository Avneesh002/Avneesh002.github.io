import { Text } from "@chakra-ui/react";
import FloatingBalloons from "../Components/FloatingBalloons";
import GithubCalendar from "../Components/GithubCalendar";
import { Projects } from "../Components/Projects";
import TechnicalSkills from "../Components/TechnicalSkills";
import Navbar from "./../Components/Navbar";
import Home from "./../Components/Profile(HOME)";
import ContactMe from "./../Components/ContactMe";
import Footer from "./../Components/Footer";

export const Homepage = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/14pcxWHnyCzvE0d_JJWfoAT5v6hl9lglu/view?usp=sharing"
    );
  };
  return (
    <>
      <Navbar handleResume={handleResume} />
      <Home handleResume={handleResume} />
      {/* <FloatingBalloons /> */}
      <Projects />
      <GithubCalendar />
      <TechnicalSkills />

      <ContactMe />
      <Footer />
    </>
  );
};
