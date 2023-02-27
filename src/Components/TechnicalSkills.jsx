import React from "react";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./skillicons.css";

const TechnicalSkills = () => {
  const items = [
    {
      path: "https://img.icons8.com/color/2x/css3.png",
      label: "CSS",
      name: "skillIcon1",
    },
    {
      path: "https://img.icons8.com/fluency/2x/javascript.png",
      name: "skillIcon2",
      label: "Javascript",
    },
    {
      path: " https://img.icons8.com/color/2x/bootstrap.png",
      name: "skillIcon3",
      label: "Bootstrap",
    },
    {
      path: "https://img.icons8.com/color/2x/html-5.png",
      name: "skillIcon4",
      label: "HTML",
    },
    {
      path: "https://img.icons8.com/color/512/chakra-ui.png",
      name: "skillIcon5",
      label: "Chakra-UI",
    },
    {
      path: "https://img.icons8.com/color/512/mongodb.png",
      name: "skillIcon6",
      label: "MongoDB",
    },
    {
      path: "https://img.icons8.com/office/512/react.png",
      name: "skillIcon7",
      label: "reactJS",
    },
    {
      path: "https://img.icons8.com/color/2x/redux.png",
      name: "skillIcon8",
      label: "Redux",
    },
    {
      path: "https://img.icons8.com/color/2x/typescript.png",
      name: "skillIcon9",
      label: "Typescript",
    },

    {
      path: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      name: "skillIcon1",
      label: "Node JS",
    },
    {
      path: "https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67",
      name: "skillIcon2",
      label: "Express",
    },
    // {
    //   path: "https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png",
    //   name: "skillIcon3",
    //   label: "NPM",
    // },

    {
      path: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png",
      name: "skillIcon5",
      label: "Vite app",
    },

    // {
    //   path: "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
    //   name: "skillIcon8",
    //   label: "Firebase",
    // },
    {
      path: "https://www.pngfind.com/pngs/m/430-4309574_mongoose-js-logo-hd-png-download.png",
      name: "skillIcon2",
      label: "Mongoose",
    },
    // {
    //   path: "https://img.icons8.com/glyph-neue/2x/github.png",
    //   name: "skillIcon10",
    //   label: "Github",
    // },
    // {
    //   path: "https://cdn.iconscout.com/icon/free/png-128/visual-studio-code-3251603-2724650.png",
    //   name: "skillIcon11",
    //   label: "VS code Editor",
    // },
  ];

  return (
    <Stack
      border={"none"}
      id="skills"
      pt={useBreakpointValue({ base: "25px", lg: "50px" })}
      align={"center"}
      bg={"#151312"}
      pb="100px"
    >
      <Text opacity={"60%"} fontWeight={"800"} color="white" fontSize={"78px"}>
        <span className="neonText">S</span>
        <span className="neonText">k</span>
        <span className="neonText">i</span>
        <span className="neonText">l</span>
        <span className="neonText">l</span>
        <span className="neonText">s</span>
      </Text>
      <SimpleGrid
        gap={"10px"}
        w={useBreakpointValue({ base: "100%", lg: "92%" })}
        pt={useBreakpointValue({ base: "25px", lg: "150px" })}
        pl={useBreakpointValue({ base: "15px", lg: "100px" })}
        pb={useBreakpointValue({ base: "15px", lg: "100px" })}
        pr={useBreakpointValue({ base: "45px", lg: "0px" })}
        columns={{ base: "3", sm: "6" }}
        transition={"1s"}
      >
        {items.map((el) => (
          <Tooltip key={el.path} label={el.label} aria-label="A tooltip">
            <Stack
              className={el.name}
              transition={"1s"}
              height={"85px"}
              w={"100px"}
              align={"center"}
              justify={"center"}
              direction="column"
              mb="38px"
            >
              <Image
                borderBottom={"1px solid white"}
                width={"70px"}
                h="80px"
                src={el.path}
                alt=""
              />
              <Text
                p={"2px 8px"}
                borderRight={"1px solid white"}
                borderLeft={"1px solid white"}
                color={"white"}
              >
                {el.label}
              </Text>
            </Stack>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TechnicalSkills;
