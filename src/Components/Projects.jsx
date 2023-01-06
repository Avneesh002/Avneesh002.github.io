import {
  Badge,
  SimpleGrid,
  Stack,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

export const Projects = () => {
  const headstyle = {
    fontWeight: "500",
    fontSize: "48px",
    textAlign: "center",
  };

  const contentBody = {
    backgroundColor: "#EDF2F7",
    padding: useBreakpointValue({ base: "5px", md: "50px" }),
    paddingLeft: useBreakpointValue({ base: "0", md: "135px" }),
  };

  const subHeading = {
    fontWeight: "500",
    fontSize: "30px",
  };
  const transitionS = {
    transition: "500ms",
  };
  return (
    <>
      <Stack id="projects" style={contentBody}>
        <Text style={headstyle}>Projects</Text>
        <Stack className="projectCard">
          <Fade left>
            <Stack
              style={transitionS}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              bg={"whiteAlpha.700"}
              mt={"50px"}
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              direction={useBreakpointValue({
                base: "column",
                md: "row",
              })}
            >
              <Stack justify={"center"} w={"100%"}>
                {" "}
                <img
                  width={"100%"}
                  src="https://pages.faqprime.com/wp-content/uploads/2022/05/Landing-page.jpg"
                  alt=""
                />
              </Stack>
              <Stack pl={"25px"} pt={"20px"} pr={"10px"}>
                <Stack align={"center"} direction={"row"}>
                  {" "}
                  <Text style={subHeading}>Airtable</Text>{" "}
                  <Text fontWeight={"500"} fontSize={"12px"} pt={"10px"}>
                    Clone
                  </Text>
                </Stack>
                <Text pt={"5px"} pb={"20px"}>
                  Airtable is a low-code platform for building collaborative
                  apps. Customize your workflow, collaborate, and achieve
                  ambitious outcomes. It was an individual Project built in 5
                  days.
                </Text>
                <Text fontWeight={"500"} fontSize={"18px"}>
                  Tech Stack
                </Text>
                <SimpleGrid
                  textAlign={"center"}
                  spacing={1}
                  columns={{ base: "3", md: "6" }}
                >
                  <Badge p={"5px"} colorScheme={"red"}>
                    React JS
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    Chakra-UI
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    Javascript
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    HTML
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    CSS
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    Axios
                  </Badge>{" "}
                </SimpleGrid>
                <Stack
                  pt={useBreakpointValue({ base: "20px", md: "100px" })}
                  justify={useBreakpointValue({ base: "center", md: "" })}
                  pb={useBreakpointValue({ base: "20px", md: "20px" })}
                  direction={"row"}
                >
                  <Link href="https://github.com/Avneesh002/Airtable">
                    <Button>
                      <BsGithub />{" "}
                    </Button>
                  </Link>
                  <Link href="https://short-coach-2995.vercel.app/">
                    <Button>
                      {" "}
                      <GrDeploy />
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
          {/* ----------------------------- */}
          <Fade right>
            <Stack
              style={transitionS}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              bg={"whiteAlpha.700"}
              mt={"50px"}
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              direction={useBreakpointValue({
                base: "column-reverse",
                md: "row",
              })}
            >
              <Stack
                // w={useBreakpointValue({
                //   base: "100%",
                //   md: "80%",
                // })}
                pl={"25px"}
                pt={"20px"}
                pr={"10px"}
              >
                <Stack align={"center"} direction={"row"}>
                  {" "}
                  <Text style={subHeading}>Max Fashion</Text>{" "}
                  <Text fontWeight={"500"} fontSize={"12px"} pt={"10px"}>
                    Clone
                  </Text>
                </Stack>
                <Text pt={"5px"} pb={"20px"}>
                  Max Fashion is an E-Commerce website which sells clothes for
                  Men, Women and Kids. It was a collaborative project built by 4
                  members in 5 days. I developed Cart Page and Checkout page in
                  this website.
                </Text>
                <Text fontWeight={"500"} fontSize={"18px"}>
                  Tech Stack
                </Text>
                <SimpleGrid
                  textAlign={"center"}
                  spacing={1}
                  columns={{ base: "3", md: "3" }}
                >
                  <Badge p={"5px"} colorScheme={"red"}>
                    Javascript
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    HTML
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    CSS
                  </Badge>{" "}
                </SimpleGrid>
                <Stack
                  pt={useBreakpointValue({ base: "20px", md: "150px" })}
                  justify={useBreakpointValue({ base: "center", md: "" })}
                  pb={useBreakpointValue({ base: "20px", md: "20px" })}
                  direction={"row"}
                >
                  <Link href="https://github.com/Binodgith/hunky-potato-4915">
                    <Button>
                      <BsGithub />{" "}
                    </Button>
                  </Link>
                  <Link href="https://team-max-u3.netlify.app/">
                    <Button>
                      {" "}
                      <GrDeploy />
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Stack
                justify={"center"}
                w={useBreakpointValue({
                  base: "100%",
                  md: "60%",
                })}
              >
                {" "}
                <img width={"100%"} src="./Screenshot (134).png" alt="" />
              </Stack>
            </Stack>
          </Fade>

          {/* -------------------------------------------------- */}
          <Fade left>
            <Stack
              style={transitionS}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              bg={"whiteAlpha.700"}
              mt={"50px"}
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              direction={useBreakpointValue({
                base: "column",
                md: "row",
              })}
            >
              <Stack
                w={useBreakpointValue({
                  base: "100%",
                  md: "60%",
                })}
                justify={"center"}
              >
                {" "}
                <img width={"100%"} src="/Screenshot (135).png" alt="" />
              </Stack>
              <Stack pl={"25px"} pt={"20px"} pr={"10px"}>
                <Stack align={"center"} direction={"row"}>
                  {" "}
                  <Text style={subHeading}>Best Buy</Text>{" "}
                  <Text fontWeight={"500"} fontSize={"12px"} pt={"10px"}>
                    Clone
                  </Text>
                </Stack>
                <Text pt={"5px"} pb={"20px"}>
                  It is an E-commerce website that sells different products of
                  different categories. It was a collaborative project built by
                  5 members in 5 days. My areas of responsibility was to build
                  checkout page and cart page.
                </Text>
                <Text fontWeight={"500"} fontSize={"18px"}>
                  Tech Stack
                </Text>
                <SimpleGrid
                  textAlign={"center"}
                  spacing={1}
                  columns={{ base: "3", md: "3" }}
                >
                  <Badge p={"5px"} colorScheme={"red"}>
                    Javascript
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    HTML
                  </Badge>{" "}
                  <Badge p={"5px"} colorScheme={"red"}>
                    CSS
                  </Badge>{" "}
                </SimpleGrid>
                <Stack
                  pt={useBreakpointValue({ base: "20px", md: "140px" })}
                  justify={useBreakpointValue({ base: "center", md: "" })}
                  pb={useBreakpointValue({ base: "20px", md: "20px" })}
                  direction={"row"}
                >
                  <Link href="https://github.com/abhi-swami/shaky-coast-2728">
                    <Button>
                      <BsGithub />{" "}
                    </Button>
                  </Link>
                  <Link href="https://unique-async.netlify.app/">
                    <Button>
                      {" "}
                      <GrDeploy />
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
        </Stack>
      </Stack>
    </>
  );
};
