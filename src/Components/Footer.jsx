import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      opacity={"80%"}
      p={useBreakpointValue({ base: "12px", lg: "5px" })}
      bg={"black"}
      h="50px"
    >
      <Text
        fontSize={useBreakpointValue({ base: "12px", lg: "26px" })}
        fontWeight={useBreakpointValue({
          base: "800",
          lg: "800",
        })}
        color={"white"}
        display={"flex"}
        flexDirection={"row"}
        align={"center"}
        justifyContent={"center"}
      >
        Handcrafted with ❤ & imagination by{"  "}
        <Text pl={"6px"} color="red.500">
          {" "}
          Avneesh Grover.
        </Text>
      </Text>
    </Stack>
  );
};

export default Footer;
