import React from "react";
import { SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import "./skillicons.css";

const TechnicalSkills = () => {
  const items = [
    {
      path: "https://img.icons8.com/color/2x/css3.png",
      name: "skillIcon1",
    },
    {
      path: "https://img.icons8.com/fluency/2x/javascript.png",
      name: "skillIcon2",
    },
    {
      path: " https://img.icons8.com/color/2x/bootstrap.png",
      name: "skillIcon3",
    },
    {
      path: "https://img.icons8.com/color/2x/html-5.png",
      name: "skillIcon4",
    },
    {
      path: "https://img.icons8.com/color/512/chakra-ui.png",
      name: "skillIcon5",
    },
    {
      path: "https://img.icons8.com/color/512/mongodb.png",
      name: "skillIcon6",
    },
    {
      path: "https://img.icons8.com/office/512/react.png",
      name: "skillIcon7",
    },
    {
      path: "https://img.icons8.com/color/2x/redux.png",
      name: "skillIcon8",
    },
    {
      path: "https://img.icons8.com/color/2x/typescript.png",
      name: "skillIcon9",
    },
    {
      path: "https://img.icons8.com/glyph-neue/2x/github.png",
      name: "skillIcon10",
    },
    {
      path: "https://cdn.iconscout.com/icon/free/png-128/visual-studio-code-3251603-2724650.png",
      name: "skillIcon11",
    },
    {
      path: "data:image/png;base64,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",
      name: "skillIcon11",
    },
    {
      path: "data:image/png;base64,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",
      name: "skillIcon11",
    },
  ];

  return (
    <Stack
      id="skills"
      pt={useBreakpointValue({ base: "25px", lg: "100px" })}
      align={"center"}
      bg={"#EDF2F7"}
    >
      <Text mt={"100px"} opacity={"40%"} fontWeight={"800"} fontSize={"78px"}>
        Skills
      </Text>
      <SimpleGrid
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        gap={"10px"}
        w={useBreakpointValue({ base: "100%", lg: "92%" })}
        pt={useBreakpointValue({ base: "25px", lg: "150px" })}
        pl={useBreakpointValue({ base: "15px", lg: "100px" })}
        pb={useBreakpointValue({ base: "15px", lg: "100px" })}
        pr={useBreakpointValue({ base: "45px", lg: "0px" })}
        columns={{ base: "3", sm: "6" }}
        transition={"1s"}
        _hover={{
          bg: "white",
        }}
      >
        {items.map((el) => (
          <Stack
            className={el.name}
            transition={"1s"}
            boxShadow={"10px 10px 30px 2px"}
            key={el.path}
            height={"85px"}
            w={"85px"}
            borderRadius={"50%"}
            align={"center"}
            justify={"center"}
            position="relative"
          >
            <img width={"60px"} src={el.path} alt="" />
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TechnicalSkills;
