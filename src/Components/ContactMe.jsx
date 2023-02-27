import {
  Button,
  Input,
  Stack,
  Textarea,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Text } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import "./contactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qcsz98q",
        "template_ylpn4yl",
        form.current,
        "63qqQleLy_NQbODxE"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = () => {
    if (name !== "" && email !== "") {
      toast({
        title: `Thanks ${name}, for Writing to Avneesh`,
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: `Please Dude, fill all the information or directly contact Avneesh on Whatsapp/Email`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      id="contact"
      pt={useBreakpointValue({ base: "100px", lg: "150px" })}
      bg={"#151312"}
      align={"center"}
    >
      <Text
        opacity="60%"
        color="white"
        fontWeight={"800"}
        align="center"
        fontSize={useBreakpointValue({ base: "60px", lg: "78px" })}
      >
        <span className="neonText">C</span>
        <span className="neonText">o</span>
        <span className="neonText">n</span>
        <span className="neonText">t</span>
        <span className="neonText">a</span>
        <span className="neonText">c</span>
        <span className="neonText">t</span>
        <span> </span>
        <span className="neonText">M</span>
        <span className="neonText">e</span>
      </Text>
      <Stack
        transition={"1s"}
        pb={"50px"}
        pt={"80px"}
        align={"center"}
        w={useBreakpointValue({ base: "100%", lg: "92%" })}
      >
        <Stack direction={useBreakpointValue({ base: "column", lg: "row" })}>
          <Stack direction={"row"}>
            <a href="https://www.linkedin.com/in/avneesh002/">
              <Button w="130px" colorScheme={"linkedin"}>
                <BsLinkedin /> <Text ml={"10px"}>LinkedIn</Text>
              </Button>
            </a>
            <a href="https://github.com/Avneesh002">
              <Button
                w="130px"
                _hover={{
                  border: "1px solid black",
                  bg: "white",
                  color: "black",
                }}
                color={"white"}
                bg={"black"}
              >
                <AiFillGithub /> <Text ml={"10px"}>Github</Text>
              </Button>
            </a>
          </Stack>
          <Stack direction={"row"}>
            <a href="mailto:avneeshgrover8@gmail.com">
              <Button w="130px" colorScheme={"red"}>
                <SiGmail /> <Text ml={"10px"}>Gmail</Text>
              </Button>
            </a>
            <a href="https://wa.me/+919805981877">
              <Button w="130px" colorScheme={"whatsapp"}>
                <AiOutlineWhatsApp /> <Text ml={"10px"}>Whatsapp</Text>
              </Button>
            </a>
          </Stack>
        </Stack>
        <Stack pt={"30px"} w={useBreakpointValue({ base: "70%", lg: "40%" })}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="InputBox">
              <Input
                mt="5px"
                onChange={(e) => setName(e.target.value)}
                required
                borderColor={"1px solid tomato"}
                type={"text"}
                name="from_name"
              />
              <span className="span">Name</span>
            </div>
            <div className="InputBox">
              <Input
                required
                className="email"
                mt="5px"
                borderColor={"1px solid tomato"}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                name="from_email"
              />

              <span className="span">Email</span>
            </div>

            <div className="InputBox">
              <Textarea
                mt="5px"
                required
                borderColor={"1px solid tomato"}
                type={"text"}
                height="150px"
                name="message"
              />
              <span className="span">Text</span>
            </div>
            <Button
              w={"100%"}
              mt="20px"
              bg={"white"}
              fontWeight="500"
              _hover={{ bg: "black", color: "white" }}
              color={"black"}
              type="submit"
              value={"send"}
              onClick={handleClick}
            >
              Send Message
            </Button>
          </form>
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
