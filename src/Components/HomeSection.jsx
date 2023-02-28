import { Image, Stack, Text } from "@chakra-ui/react";
import TypeOut from "react-typeout";
import "./HomeSection.css";
import Tilt from "react-parallax-tilt";

export function HomeSection() {
  return (
    <Stack
      id="home"
      direction={{ base: "column", md: "40%", lg: "row" }}
      pt={"80px"}
      pl={"40px"}
      w="100%"
      height={{ base: "700px", sm: "500px", lg: "650px" }}
      bg={"#EDF2F7"}
    >
      <Image
        transition={"500ms"}
        filter="grayscale(70%)"
        _hover={{
          filter: "auto",
          border: "none",
        }}
        zIndex={"0"}
        position="absolute"
        top={"24"}
        left={"0"}
        width={"100%"}
        height={{ base: "700px", sm: "500px", lg: "750px" }}
        src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
        alt=""
      />
      <Tilt tiltReverse={true} tiltMaxAngleX={30} tiltMaxAngleY={30}>
        <Stack
          transition={"500ms"}
          zIndex={"0"}
          filter="auto"
          blur="3px"
          _hover={{
            blur: "0px",
            border: "none",
          }}
          p={{ base: "1%", lg: "1%" }}
          width={{ base: "300px", sm: "550px", lg: "800px" }}
          height={{ base: "500px", lg: "600px" }}
          fontSize={{ base: "20px", lg: "40px" }}
          style={{
            fontWeight: "500",
            margin: "auto",
          }}
        >
          <Text color={"white"} className="firstLetter">
            HELLO 👋🏻, I AM
          </Text>
          <Text
            textShadow={"5px 7px 7px"}
            lineHeight={"43px"}
            color={"white"}
            pl={"2.5rem"}
          >
            <TypeOut className="react-typeout-caret" words={["AVNEESH"]} />
          </Text>
        </Stack>
      </Tilt>
    </Stack>
  );
}
