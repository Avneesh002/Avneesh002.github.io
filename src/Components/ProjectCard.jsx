import React from "react";
import {
  Badge,
  SimpleGrid,
  Stack,
  Text,
  Link,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./Project.css";

export const ProjectCard = ({
  imgSrc,
  heading,
  description,
  techStack,
  githubLink,
  deployLink,
}) => {
  const subHeading = {
    fontWeight: "500",
    fontSize: "30px",
  };
  return (
    <Stack
      m="auto"
      w={useBreakpointValue({
        base: "350px",
        lg: "600px",
      })}
      pb={useBreakpointValue({
        base: "20px",
        lg: "50px",
      })}
      className="projectCard"
      borderRadius={"10px"}
      h={useBreakpointValue({
        base: "auto",
        lg: "700px",
      })}
      bg={"white"}
      transition={"1s"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Stack className="giveHover">
        {" "}
        <img src={imgSrc} alt="" />
      </Stack>
      <Stack className="projectDesc" p={"30px"}>
        <Flex align={"center"} gap="10px" direction={"row"}>
          {" "}
          <Text style={subHeading}>{heading}</Text>{" "}
          <Text fontWeight={"500"} fontSize={"12px"} pt={"10px"}>
            Clone
          </Text>
        </Flex>
        <Text fontWeight={"500"} pt={"5px"} pb={"20px"}>
          {description}
        </Text>
        <Text fontWeight={"500"} fontSize={"19px"}>
          Tech Stack
        </Text>
        <SimpleGrid
          textAlign={"center"}
          spacing={1}
          columns={{ base: "3", md: "6" }}
        >
          {techStack.map((el) => {
            return (
              <Badge key={el} p={"5px"} colorScheme={"red"}>
                {el}
              </Badge>
            );
          })}
        </SimpleGrid>
        <Stack
          pt={useBreakpointValue({ base: "10px", lg: "30px" })}
          direction={"row"}
          justify={"space-evenly"}
        >
          <a href={githubLink} target={"_blank"}>
            <Button
              transition="500ms"
              bg={"black"}
              color="white"
              _hover={{
                bg: "white",
                color: "black",
                border: "3px solid black",
              }}
              p={"20px"}
            >
              <BsGithub /> <Text ml={"15px"}>Github</Text>
            </Button>
          </a>
          <a href={deployLink} target={"_blank"}>
            <Button
              transition="500ms"
              bg={"black"}
              color="white"
              _hover={{
                bg: "white",
                color: "black",
                border: "3px solid black",
              }}
              p={"20px"}
            >
              {" "}
              <TfiWorld />
              <Text ml={"15px"}>Demo</Text>
            </Button>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};
