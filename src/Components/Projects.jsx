import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <>
      <Stack pl={useBreakpointValue({})} bg={"gray.100"}>
        <Text
          bg={"gray.100"}
          align={"center"}
          fontWeight={"500"}
          fontSize={"45px"}
        >
          Projects
        </Text>

        <Stack
          align={useBreakpointValue({ base: "column", md: "row" })}
        ></Stack>
      </Stack>
    </>
  );
};
