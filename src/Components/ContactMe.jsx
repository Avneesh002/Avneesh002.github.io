import {
  Button,
  Input,
  Link,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
const ContactMe = () => {
  return (
    <Stack
      id="contact"
      pt={useBreakpointValue({ base: "100px", lg: "150px" })}
      bg={"#F1F1FB"}
      align={"center"}
    >
      <Text opacity={"40%"} fontWeight={"800"} align="center" fontSize={"78px"}>
        Contact Me
      </Text>
      <Stack
        transition={"1s"}
        pb={"50px"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        pt={"80px"}
        align={"center"}
        w={useBreakpointValue({ base: "100%", lg: "92%" })}
        _hover={{
          bg: "white",
        }}
      >
        <Stack direction={useBreakpointValue({ base: "column", lg: "row" })}>
          <Stack direction={"row"}>
            <a href="https://www.linkedin.com/in/avneesh002/">
              <Button colorScheme={"linkedin"}>
                <BsLinkedin /> <Text ml={"10px"}>LinkedIn</Text>
              </Button>
            </a>
            <a href="https://github.com/Avneesh002">
              <Button color={"white"} bg={"black"}>
                <AiFillGithub /> <Text ml={"10px"}>Github</Text>
              </Button>
            </a>
          </Stack>
          <Stack direction={"row"}>
            <a href="mailto:avneeshgrover8@gmail.com">
              <Button colorScheme={"red"}>
                <SiGmail /> <Text ml={"10px"}>Gmail</Text>
              </Button>
            </a>
            <a href="https://wa.me/+919805981877">
              <Button colorScheme={"whatsapp"}>
                <AiOutlineWhatsApp /> <Text ml={"10px"}>Whatsapp</Text>
              </Button>
            </a>
          </Stack>
        </Stack>
        <Stack pt={"30px"} w={useBreakpointValue({ base: "50%", lg: "30%" })}>
          <Input placeholder="Your Name" type={"text"} />
          <Input placeholder="Your Email" type={"email"} />
          <Textarea placeholder="Your Message"></Textarea>
          <Button bg={"red.500"} _hover={{ bg: "red.800" }} color={"white"}>
            Send Message
          </Button>
        </Stack>
      </Stack>
      <br />
      <br />
      <br />
      <br />
    </Stack>
  );
};

export default ContactMe;
