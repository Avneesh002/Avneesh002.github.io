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
    <Box pos={"sticky"} zIndex={"9"} top={"0"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
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
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Stack
            ml={"20px"}
            direction={"row"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
          >
            <img
              width={"150px"}
              src="https://i.ibb.co/Y06NZsJ/Avn-1.gif"
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
          <Button
            onClick={handleResume}
            display={{ base: "inline-flex", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red.500"}
            size={useBreakpointValue({ base: "sm", md: "md" })}
            href={"#"}
            _hover={{
              bg: "red.800",
            }}
          >
            <Text mr={"5px"}>Resume</Text>
            <BiDownload fontSize={"17px"} />
          </Button>
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
      {/* {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))} */}
      <ScrollIntoView selector="#home">
        <Button variant={"ghost"}>😄 About me</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects">
        <Button variant={"ghost"}>📚 Projects</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#skills">
        <Button variant={"ghost"}>🧑🏻‍💻 Skills</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <Button variant={"ghost"}>📞 Contact me</Button>
      </ScrollIntoView>
    </Stack>
  );
};

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <ScrollIntoView selector="#home">
        <Button variant={"ghost"}> About me</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects">
        <Button variant={"ghost"}> Projects</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#skills">
        <Button variant={"ghost"}> Skills</Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <Button variant={"ghost"}> Contact me</Button>
      </ScrollIntoView>
    </Stack>
  );
};
