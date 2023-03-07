import { Button, Image, Stack, Text } from "@chakra-ui/react";
import TypeOut from "react-typeout";
import "./HomeSection.css";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

export function HomeSection() {
  return (
    <Stack
      id="home"
      direction={{ base: "column", lg: "row" }}
      justify={{ lg: "space-evenly" }}
      pt={"80px"}
      pl={"40px"}
      w="100%"
      align={"center"}
      height={{ base: "700px", sm: "600px", md: "700px", lg: "700px" }}
      backgroundImage="linear-gradient(to right bottom, #020202, #090909, #0f0f0f, #141414, #181818, #181819, #191919, #19191a, #161617, #121415, #0f1111, #0a0d0d)"
    >
      <Stack align={"center"}>
        <Tilt tiltReverse={true} tiltMaxAngleX={30} tiltMaxAngleY={30}>
          <Stack
            transition={"500ms"}
            filter="auto"
            blur="3px"
            _hover={{
              blur: "0px",
              border: "none",
            }}
            p={{ base: "1%", lg: "1%" }}
            w={{ base: "300px", lg: "85%" }}
            height={{ base: "300px", lg: "600px" }}
            fontSize={{ base: "29px", lg: "50px" }}
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
      <Stack
        align={"center"}
        h={{ base: "40%", lg: "60%" }}
        w={{ base: "100%", lg: "40%" }}
      >
        <Image
          className="imgg"
          h={"100%"}
          width={{ base: "90%", lg: "60%" }}
          src="https://ouch-cdn2.icons8.com/aVubHyBkWOEPF713Wh-CdQFQzUl-4dxFWyJTSIUS9E0/rs:fit:256:307/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzY0/L2Y2NzRiZjM0LTI4/OTEtNGM5Ni04OGVm/LWJiYzM3YTY1MzUw/MS5wbmc.png"
        />
      </Stack>
    </Stack>
  );
}
