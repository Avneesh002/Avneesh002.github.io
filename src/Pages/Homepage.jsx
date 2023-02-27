import GithubCalendar from "../Components/GithubCalendar";
import TechnicalSkills from "../Components/TechnicalSkills";
import Navbar from "./../Components/Navbar";
import Home from "./../Components/Profile(HOME)";
import ContactMe from "./../Components/ContactMe";
import Footer from "./../Components/Footer";
import { Project } from "../Components/Projects";
import { HomeSection } from "./../Components/HomeSection";
import Tools from "../Components/Tools";

export const Homepage = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/14pcxWHnyCzvE0d_JJWfoAT5v6hl9lglu/view?usp=sharing"
    );
  };
  return (
    <>
      <Navbar handleResume={handleResume} />
      <HomeSection />
      <Home handleResume={handleResume} />
      <TechnicalSkills />
      <Tools />
      <Project />
      <GithubCalendar />
      <ContactMe />
      <Footer />
    </>
  );
};
