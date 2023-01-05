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

export default function Home() {
  const [isMoreThan820] = useMediaQuery("(min-width:768px)");
  const [isLessThan820] = useMediaQuery("(max-width:1000px)");

  return (
    <Stack
      bg={"gray.100"}
      minH={isMoreThan820 && isLessThan820 ? "70vh" : "100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
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
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A Passionate Full-Stack Web Developer with expertise in Scalable
            Websites/applications using a wide range of front-end skills like
            HTML, CSS, Javascript, React JS, and back-end skills like Node JS,
            Mongo DB, etc.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.800",
              }}
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          w={useBreakpointValue({ base: "60%", sm: "70%", md: "40%" })}
          ml={useBreakpointValue({ base: "20%", sm: "15%", md: "10%" })}
          mt={useBreakpointValue({ base: "-35%", sm: "-10%", md: "-10px" })}
          borderRadius={"130%"}
          src={"https://i.ibb.co/bmsdDxq/round-pic.png"}
        />
      </Flex>
    </Stack>
  );
}
