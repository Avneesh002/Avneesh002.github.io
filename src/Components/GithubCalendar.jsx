import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const headstyle = {
    fontWeight: "800",
    fontSize: "78px",
    opacity: "40%",
    textAlign: "center",
  };

  return (
    <Stack
      id="stats"
      align={"center"}
      pt={useBreakpointValue({ base: "50px", lg: "150px" })}
      // pl={useBreakpointValue({ base: "0px", lg: "75px" })}
      bg={"#F1F1FB"}
    >
      <Text style={headstyle}>Stats</Text>
      <Stack
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        align={"center"}
        transition="1s"
        w={useBreakpointValue({ base: "100%", lg: "93%" })}
        p={useBreakpointValue({ base: "15px", lg: "30px" })}
        _hover={{
          bg: "white",
        }}
      >
        <GitHubCalendar username="avneesh002" />
        <img src="https://streak-stats.demolab.com?user=avneesh002" />
      </Stack>
    </Stack>
  );
};

export default GithubCalendar;
