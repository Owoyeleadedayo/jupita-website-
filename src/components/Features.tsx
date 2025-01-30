import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { TbArrowsRightLeft } from "react-icons/tb";
import { FaWallet } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import ORI from '../assets/Images/origin.png'

const Features = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"30px"}
      >
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={900}
            fontSize={"42px"}
            color={"#000000"}
            textAlign={"center"}
          >
            Features
          </Text>
        </Flex>

        <Flex mb={"20px"} gap={"40px"}>
          <Flex
            width={"100%"}
            height={"100%"}
            direction={"column"}
            gap={"20px"}
          >
            <Card
              width={"250px"}
              height={"200px"}
              bgColor={"#F5F5F5"}
              p={"15px"}
              direction={"column"}
              gap={"10px"}
            >
              <Flex
                bgColor={"#D6510F"}
                width={"40px"}
                height={"50px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
              >
                <TbArrowsRightLeft fontSize={"25px"} color="#FFFFFF" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Plus Jakarta Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#000"}
                  textTransform={'uppercase'}
                >
                  Credit Analysis and Reporting
                </Text>
              </Flex>
              <Flex>
                <Text fontFamily={"DM Sans"} fontSize={"14px"} color={"#000"}>
                  Our solution will generate credit analysis reports based on
                  client's needs
                </Text>
              </Flex>
            </Card>
            <Card
              width={"250px"}
              height={"200px"}
              bgColor={"#F5F5F5"}
              p={"15px"}
              direction={"column"}
              gap={"10px"}
            >
              <Flex
                bgColor={"#D6510F"}
                width={"40px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
              >
                <FaWallet fontSize={"25px"} color="#FFFFFF" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"DM Sans"}
                  fontWeight={700}
                  fontSize={"18px"}
                  color={"#000"}
                  textTransform={'uppercase'}
                >
                  100% Secure
                </Text>
              </Flex>
              <Flex>
                <Text fontFamily={"DM Sans"} fontSize={"14px"} color={"#000"}>
                  Save cost and explore a credit journey at a go!
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex>
            <Card
              width={"350px"}
              height={"420px"}
              direction={"column"}
              bgColor={"#F5F5F5"}
              p={"15px"}
              gap={"20px"}
            >
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"20px"}
                  color={"#000"}
                >
                  LOAN ORIGINATION AND UNDERWRITING
                </Text>
              </Flex>
              <Flex>
                <Text fontFamily={"DM Sans"} fontSize={"14px"} color={"#000"}>
                  Automate your loan origination, bank statement request and
                  review, credit report analysis and loan decision based on your
                  customized business model
                </Text>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    src={ORI}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
            </Card>
          </Flex>
          <Flex
            width={"100%"}
            height={"100%"}
            direction={"column"}
            gap={"20px"}
          >
            <Card
              width={"250px"}
              height={"200px"}
              bgColor={"#F5F5F5"}
              p={"15px"}
              direction={"column"}
              gap={"10px"}
            >
              <Flex
                bgColor={"#207EDF"}
                width={"35px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
              >
                <IoMdStats fontSize={"24px"} color="#FFF" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Plus Jakarta Sans"}
                  fontWeight={700}
                  fontSize={"15px"}
                  color={"#000"}
                  textTransform={"uppercase"}
                >
                  advanced analytics
                </Text>
              </Flex>
              <Flex>
                <Text fontFamily={"DM Sans"} fontSize={"14px"} color={"#000"}>
                  Leverage our cutting-edge algorithms to extract meaningful
                  insights from your bank transactions and credit report.
                </Text>
              </Flex>
            </Card>
            <Card
              width={"250px"}
              height={"200px"}
              bgColor={"#F5F5F5"}
              p={"15px"}
              direction={"column"}
              gap={"10px"}
            >
              <Flex
                bgColor={"#D6510F"}
                width={"40px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
              >
                <PiArrowsClockwiseBold fontSize={"25px"} color="#FFFFFF" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"DM Sans"}
                  fontWeight={700}
                  fontSize={"13px"}
                  color={"#000"}
                  textTransform={"uppercase"}
                >
                  reduced manual intervention
                </Text>
              </Flex>
              <Flex>
                <Text fontFamily={"DM Sans"} fontSize={"14px"} color={"#000"}>
                  Faster turnaround time with our zero-touch workflow
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Features;
