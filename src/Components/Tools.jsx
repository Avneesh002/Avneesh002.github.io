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

const Tools = () => {
  const items = [
    {
      path: "https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png",
      name: "skillIcon3",
      label: "NPM",
    },

    {
      path: "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      name: "skillIcon8",
      label: "Firebase",
    },

    {
      path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MaquC8Z-Fiez9bJEBfkEQSjIUpXgzqWnQIoo8dKBtxAhFVeeZZE1dO9VFmOUXIT3EjU&usqp=CAU",
      name: "skillIcon10",
      label: "Github",
    },
    {
      path: "https://cdn.iconscout.com/icon/free/png-128/visual-studio-code-3251603-2724650.png",
      name: "skillIcon11",
      label: "VS code Editor",
    },
  ];

  return (
    <Stack
      border={"none"}
      id="skills"
      pt={useBreakpointValue({ base: "25px", lg: "0px" })}
      align={"center"}
      bg={"#151312"}
      pb="100px"
    >
      <Text opacity={"60%"} fontWeight={"800"} color="white" fontSize={"78px"}>
        <span className="neonText">T</span>
        <span className="neonText">o</span>
        <span className="neonText">o</span>
        <span className="neonText">l</span>
        <span className="neonText">s</span>
      </Text>
      <SimpleGrid
        gap={"10px"}
        w={useBreakpointValue({ base: "100%", lg: "92%" })}
        pt={useBreakpointValue({ base: "25px", lg: "150px" })}
        pl={useBreakpointValue({ base: "55px", sm: "130px", lg: "400px" })}
        pb={useBreakpointValue({ base: "15px" })}
        pr={useBreakpointValue({ base: "45px", sm: "0px" })}
        columns={{ base: "2", sm: "6" }}
        transition={"1s"}
      >
        {items.map((el) => (
          <Tooltip key={el.path} label={el.label} aria-label="A tooltip">
            <Stack
              boxShadow={"1px 4px 4px 2px black"}
              className={el.name}
              transition={"1s"}
              height={"85px"}
              w={"100px"}
              align={"center"}
              justify={"center"}
              direction="column"
              mb="38px"
              cursor={"pointer"}
            >
              <Image
                transition={"500ms"}
                _hover={{
                  transform: "translateY(-20px)",
                }}
                mb={"10px"}
                borderBottom={"1px solid white"}
                width={"70px"}
                h="70px"
                src={el.path}
                alt=""
                pb={"10px"}
              />
              <Text
                align="center"
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

export default Tools;
