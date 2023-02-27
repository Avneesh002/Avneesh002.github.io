import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import ScrollIntoView from "react-scroll-into-view";

export default function Navbar({ handleResume }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={"1px solid white"}
      pos={"sticky"}
      zIndex={"10"}
      top={"0"}
    >
      <Flex
        bg={useColorModeValue("#151312", "#151312")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          ml={{ base: "-40px", md: "10px" }}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Stack
            ml={"20px"}
            direction={"row"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
          >
            <img
              width={"100px"}
              src="https://t3.ftcdn.net/jpg/04/44/09/96/240_F_444099621_UqsDpJHug488hKGBO140j10WmOhkkPD4.jpg"
              alt="It-all-typo"
            />
          </Stack>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <a
            href="/Avneesh_Grover_Resume.pdf"
            download="/Avneesh_Grover_Resume.pdf"
            target={"_blank"}
          >
            <Button
              onClick={handleResume}
              display={{ base: "inline-flex", md: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"black"}
              bg={"white"}
              size={useBreakpointValue({ base: "sm", md: "md" })}
              href={"#"}
              _hover={{
                bg: "black",
                color: "white",
              }}
            >
              <Text mr={"5px"}>Resume</Text>
              <BiDownload fontSize={"17px"} />
            </Button>
          </a>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack align={"center"} direction={"row"} spacing={4}>
      <ScrollIntoView selector="#home">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          🏠 Home
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#aboutMe">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          😄 About me
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#skills">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          🧑🏻‍💻 Skills
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          📚 Projects
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          📞 Contact me
        </Button>
      </ScrollIntoView>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      transition={"500ms"}
      position={"absolute"}
      width="100%"
      zIndex={"3"}
      bg={useColorModeValue("#151312", " #151312")}
      color={"white"}
      p={4}
      display={{ md: "none" }}
    >
      <ScrollIntoView selector="#home">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          🏠 Home
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#aboutMe">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          😄 About me
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#skills">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          🧑🏻‍💻 Skills
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          📚 Projects
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <Button _hover={{ bg: "black", color: "white" }} variant={"ghost"}>
          📞 Contact me
        </Button>
      </ScrollIntoView>
    </Stack>
  );
};
