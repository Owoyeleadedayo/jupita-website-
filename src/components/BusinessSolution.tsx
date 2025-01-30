import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Solutions from "../assets/Images/solutions.png";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

const BusinessSolution = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={"30px"}
        my={"80px"}
        px={"40px"}
      >
        <GridItem colSpan={6}>
          <Flex>
            <Box width={'100%'} height={'450px'}>
              <Image src={Solutions} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={6}>
          <Flex direction={"column"} gap={"20px"}>
            <Box width={"500px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"36px"}
                color={"#000"}
              >
                Your business is poised for expansion. Our solution is designed
                to fuel it.
              </Text>
            </Box>
            <Flex>
              <Box width={"500px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"18px"}
                  fontWeight={400}
                  color={"#000"}
                >
                  Jupita Credit in a Box merges cutting-edge tech with SaaS
                  convenience, empowering data control and shaping business
                  futures with flexibility.
                </Text>
              </Box>
            </Flex>
            <Flex direction={"column"} gap={"20px"}>
              <Flex gap={"10px"}>
                <Flex
                  bgColor={"#D6510F"}
                  width={"40px"}
                  height={"40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"8px"}
                >
                  <FaArrowTrendDown fontSize={"24px"} color="#FFF" />
                </Flex>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontFamily={"DM Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    color={"#000"}
                  >
                    Lowest fees in market
                  </Text>
                </Flex>
              </Flex>
              <Flex gap={"10px"}>
                <Flex
                  bgColor={"#D6510F"}
                  width={"40px"}
                  height={"40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"8px"}
                >
                  <FaBoltLightning fontSize={"22px"} color="#FFF" />
                </Flex>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontFamily={"DM Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    color={"#000"}
                  >
                    Fast and secure
                  </Text>
                </Flex>
              </Flex>
              <Flex gap={"10px"}>
                <Flex
                  bgColor={"#D6510F"}
                  width={"40px"}
                  height={"40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"8px"}
                >
                  <IoBag fontSize={"22px"} color="#FFF" />
                </Flex>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontFamily={"DM Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    color={"#000"}
                  >
                    256-bit secure encryption
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default BusinessSolution;
