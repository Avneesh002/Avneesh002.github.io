import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      bg={"gray.100"}
      minH={"100vh"}
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
                bg: "red.400",
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
            Passionate Full-Stack Web Developer with expertise in Scalable
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
          w={useBreakpointValue({ base: "80%", sm: "70%", md: "50%" })}
          ml={useBreakpointValue({ base: "6%", sm: "15%", md: "10%" })}
          mt={useBreakpointValue({ base: "-61%", sm: "-35%", md: "-10px" })}
          borderRadius={("100%", "100%")}
          src={
            "https://i.ibb.co/pJzSHR5/Whats-App-Image-2022-12-31-at-8-45-37-PM.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
