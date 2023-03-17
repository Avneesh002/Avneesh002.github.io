import { Button, Image, Stack, Text } from "@chakra-ui/react";
import TypeOut from "react-typeout";
import "./HomeSection.css";
import Tilt from "react-parallax-tilt";
import React, { useState } from "react";

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
        bg={"url(blobanimation.svg)"}
        bgRepeat="no-repeat"
        bgSize={"cover"}
        align={"center"}
        h={{ base: "50%", lg: "70%" }}
        w={{ base: "100%", lg: "40%" }}
      >
        <div class="hit-area">
          <div class="hitbox" id="a-1"></div>
          <div class="hitbox" id="a-2"></div>
          <div class="hitbox" id="a-3"></div>
          <div class="hitbox" id="a-4"></div>
          <div class="hitbox" id="a-5"></div>
          <div class="hitbox" id="b-1"></div>
          <div class="hitbox" id="b-2"></div>
          <div class="hitbox" id="b-3"></div>
          <div class="hitbox" id="b-4"></div>
          <div class="hitbox" id="b-5"></div>
          <div class="hitbox" id="c-1"></div>
          <div class="hitbox" id="c-2"></div>
          <div class="hitbox" id="c-3"></div>
          <div class="hitbox" id="c-4"></div>
          <div class="hitbox" id="c-5"></div>
          <div class="hitbox" id="d-1"></div>
          <div class="hitbox" id="d-2"></div>
          <div class="hitbox" id="d-3"></div>
          <div class="hitbox" id="d-4"></div>
          <div class="hitbox" id="d-5"></div>
          <div class="hitbox" id="e-1"></div>
          <div class="hitbox" id="e-2"></div>
          <div class="hitbox" id="e-3"></div>
          <div class="hitbox" id="e-4"></div>
          <div class="hitbox" id="e-5"></div>
          <div class="eye">
            <div class="pupil"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
          </div>
          <div class="eyelid"></div>
          <div class="eyelid"></div>
        </div>
      </Stack>
    </Stack>
  );
}
