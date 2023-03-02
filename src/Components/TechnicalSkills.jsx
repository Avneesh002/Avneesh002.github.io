import React from "react";
import {
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
      label: "ChakraUI",
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

    {
      path: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png",
      name: "skillIcon5",
      label: "Vite app",
    },
    {
      path: "data:image/png;base64,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",
      name: "skillIcon2",
      label: "Mongoose",
    },
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
              boxShadow={"2px 4px 4px 4px black"}
              className={el.name}
              transition={"1s"}
              height={"85px"}
              w={"100px"}
              align={"center"}
              justify={"center"}
              direction="column"
              mb="58px"
              _hover={{
                cursor: "Pointer",
              }}
            >
              <Image
                transition={"500ms"}
                mb="10px"
                borderBottom={"1px solid white"}
                width={"70px"}
                h="80px"
                src={el.path}
                alt=""
              />
              <Text
                transition={"500ms ease-in-out"}
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
