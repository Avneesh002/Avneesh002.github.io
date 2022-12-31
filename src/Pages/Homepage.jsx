import { Projects } from "../Components/Projects";
import Navbar from "./../Components/Navbar";
import Home from "./../Components/Profile(HOME)";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
    </>
  );
};
