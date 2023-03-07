import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import "./profile.css";

export default function Home({ handleResume }) {
  const [isMoreThan820] = useMediaQuery("(min-width:768px)");
  const [isLessThan820] = useMediaQuery("(max-width:1000px)");

  return (
    <Stack
      id="aboutMe"
      bg={"#151312"}
      minH={isMoreThan820 && isLessThan820 ? "90vh" : "100vh"}
    >
      <Text
        mt={"100px"}
        mb={"100px"}
        color="white"
        opacity={"80%"}
        align="center"
        fontWeight={"800"}
        fontSize={{ base: "60px", lg: "78px" }}
      >
        <span className="neonText">A</span>
        <span className="neonText">b</span>
        <span className="neonText">o</span>
        <span className="neonText">u</span>
        <span className="neonText">t</span>
        <span className="neonText"> </span>
        <span className="neonText">M</span>
        <span className="neonText">e</span>
      </Text>
      <Stack
        pb={"150px"}
        gap={{ base: "100px", lg: "10px" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"white"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "White",
                  zIndex: -1,
                }}
              >
                Hey , I'm 🙋‍♂️
              </Text>
              <br />{" "}
              <Text color={"red.500"} as={"span"}>
                Avneesh Grover
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
              A Passionate Full Stack Web Developer with expertise in Scalable
              Websites/applications using a wide range of front-end skills like
              HTML, CSS, Javascript, React JS and back-end skills like Node JS,
              Mongo DB, etc.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <a
                href="/fp06_471-Avneesh-Grover-Resume.pdf"
                download={"fp06_471-Avneesh-Grover-Resume.pdf"}
                target="_blank"
              >
                <Button
                  onClick={handleResume}
                  rounded={"full"}
                  bg={"white"}
                  color={"black"}
                  fontWeight="500"
                  transition="400ms ease-in-out"
                  _hover={{
                    width: "100px",
                    bg: "black",
                    color: "white",
                  }}
                >
                  Resume
                </Button>
              </a>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Stack
            pl={useBreakpointValue({ base: "10%", sm: "35%", md: "10%" })}
            align={"center"}
            direction="row"
          >
            <Stack
              className="dpBg"
              _hover={{
                boxShadow: " -6.5px 0.5px 32px 14.5px #c54545;",
              }}
              w={useBreakpointValue({ base: "240px", lg: "300px" })}
              borderRadius="50%"
            >
              <Image
                transition={"1s ease-in-out"}
                _hover={{
                  boxShadow: " -6.5px 0.5px 32px 14.5px #c54545;",
                  filter: "grayscale(50%)",
                }}
                boxShadow={"1px 5px 40px 4px"}
                borderRadius="50%"
                alt={"Login Image"}
                h={useBreakpointValue({ base: "200px", lg: "265px" })}
                w={useBreakpointValue({ base: "210px", lg: "290px" })}
                ml={useBreakpointValue({ base: "20%", sm: "15%", md: "10%" })}
                mt={useBreakpointValue({
                  base: "-35%",
                  sm: "-10%",
                  md: "-10px",
                })}
                src={"/dp.jpeg"}
              />
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
