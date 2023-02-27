import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./ContactMe";

const GithubCalendar = () => {
  const headstyle = {
    fontWeight: "800",
    fontSize: "78px",
    opacity: "60%",
    color: "white",
    textAlign: "center",
  };

  return (
    <Stack
      id="stats"
      align={"center"}
      pt={useBreakpointValue({ base: "50px", lg: "150px" })}
      bg={"#151312"}
    >
      <Text mb={"100px"} style={headstyle}>
        <span className="neonText">S</span>
        <span className="neonText">t</span>
        <span className="neonText">a</span>
        <span className="neonText">t</span>
        <span className="neonText">s</span>
      </Text>
      <Stack
        align={"center"}
        transition="1s"
        w={useBreakpointValue({ base: "100%", lg: "93%" })}
        p={useBreakpointValue({ base: "15px", lg: "30px" })}
      >
        <GitHubCalendar color={"red"} username="avneesh002" />
        <Flex direction={useBreakpointValue({ base: "column" })}>
          <img
            alt="github-streaks"
            src="https://streak-stats.demolab.com?user=avneesh002"
          />
          <img
            alt="github-languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=avneesh002"
          />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default GithubCalendar;
