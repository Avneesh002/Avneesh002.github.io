import { SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import "./Project.css";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const headstyle = {
    fontWeight: "800",
    fontSize: "78px",
    opacity: "60%",
    color: "white",
    textAlign: "center",
    marginTop: useBreakpointValue({ base: "50px", lg: "150px" }),
    marginBottom: useBreakpointValue({ base: "20px", lg: "40px" }),
  };

  const contentBody = {
    backgroundColor: "#151312",
    padding: useBreakpointValue({ base: "5px", lg: "50px" }),
  };

  return (
    <>
      <Stack id="projects" style={contentBody}>
        <Text style={headstyle}>
          <span className="neonText">P</span>
          <span className="neonText">r</span>
          <span className="neonText">o</span>
          <span className="neonText">j</span>
          <span className="neonText">e</span>
          <span className="neonText">c</span>
          <span className="neonText">t</span>
          <span className="neonText">s</span>
        </Text>
        <Stack className="projectCard">
          <SimpleGrid
            spacingY={"40px"}
            spacingX={"40px"}
            columns={{ base: 1, lg: 2 }}
          >
            {/* ---------------------------------------------- */}

            <Fade right>
              <ProjectCard
                imgSrc={
                  "https://user-images.githubusercontent.com/112627297/221422870-1e70c6c5-dd1e-4168-b781-32da146b2778.png"
                }
                heading={"Zee-5"}
                description={
                  "MovieMatrix is one stop solution for any information regarding movies, web series, tv-shows, you can find trailers, details add reviews or make a watchlist. We provide smart content search & recommendations. It is a clone of Zee-5."
                }
                techStack={[
                  "React JS",
                  "Chakra-UI",
                  "Javascript",
                  "HTML",
                  "CSS",
                  "Axios",
                  "Express JS",
                  "Mongoose",
                  "Redux",
                  "Node JS",
                  "Mongo DB",
                ]}
                githubLink={"https://github.com/hr927/MovieMatrix-Zee5_Clone"}
                deployLink={"https://moviematrix.vercel.app/"}
              />
            </Fade>
            {/* ---------------------------------------------- */}

            <Fade left>
              <ProjectCard
                imgSrc={"./Screenshot (155).png"}
                heading={"Airtable"}
                description={
                  "Airtable is a low-code platform for building collaborative  apps. Where user can Customize their workflow, collaborate, and achieve ambitious outcomes"
                }
                techStack={[
                  "React JS",
                  "Chakra-UI",
                  "Javascript",
                  "HTML",
                  "CSS",
                  "Axios",
                ]}
                githubLink={"https://github.com/Avneesh002/Airtable"}
                deployLink={"https://short-coach-2995.vercel.app/"}
              />
            </Fade>

            {/* ------------------------------------------- */}
            <Fade right>
              <ProjectCard
                imgSrc={"./Screenshot (134).png"}
                heading={"Max Fashion"}
                description={
                  "Max Fashion is an E-Commerce website where user can buy fashion products for Men, Women and kids."
                }
                techStack={["Javascript", "HTML", "CSS"]}
                githubLink={"https://github.com/Binodgith/hunky-potato-4915"}
                deployLink={"https://team-max-u3.netlify.app/"}
              />
            </Fade>

            {/* --------------------------------------------- */}

            <Fade right>
              <ProjectCard
                imgSrc={"./Screenshot (152).png"}
                heading={"Fashion Square"}
                description={
                  "Fashion Square is a clone of limeroad. It is an E-Commerce website which sells clothes for Men, Women and Kids."
                }
                techStack={[
                  "React JS",
                  "Chakra-UI",
                  "Firebase",
                  "Redux",
                  "Javascript",
                  "HTML",
                  "CSS",
                  "Axios",
                ]}
                githubLink={"https://github.com/Avneesh002/Fashion-square"}
                deployLink={"https://fashi0n-square.netlify.app/"}
              />
            </Fade>

            {/* -------------------------------------------- */}

            <Fade left>
              <ProjectCard
                imgSrc={"./ytDownloader.png"}
                heading={"Youtube Downloader"}
                description={
                  "This website allows you to download youtube videos in any of the two formats i.e Audio and Video"
                }
                techStack={[
                  "Javascript",
                  "HTML",
                  "CSS",
                  "Chakra-UI",
                  "ReactJS",
                  "NPM Packages",
                ]}
                githubLink={"https://github.com/Avneesh002/Youtube-downloader"}
                deployLink={"https://downloadyoutube.vercel.app/"}
              />
            </Fade>
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
};
