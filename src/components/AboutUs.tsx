import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import abt1 from '../assets/Images/aboutImg.png'
import abt2 from "../assets/Images/aboutImg2.png";

const AboutUs = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        pt={"80px"}
        gap={"20px"}
        px={{ md: "50px", lg: "100px", base: "24px" }}
      >
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={900}
            fontSize={"42px"}
            color={"#000000"}
            textAlign={"center"}
          >
            About Us
          </Text>
        </Flex>
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={"20px"}
          width={"100%"}
          pt={'40px'}
          height={'50%'}
          minHeight={"630px"}
        >
          <GridItem colSpan={6}>
            <Flex direction={"column"} width={"450px"} gap={"20px"}>
              <Flex>
                <Text>
                  At Jupita, we're revolutionizing the way loans are originated.
                  Our cutting-edge Loan Origination System is designed to break
                  free from the constraints of traditional, outdated systems,
                  offering a flexible and efficient solution for any lending
                  need, anywhere in the world.
                </Text>
              </Flex>
              <Flex>
                <Text>
                  We understand that every lending scenario is unique, and
                  that’s why our platform is fully customizable to fit the
                  specific requirements of your business. Whether you’re in
                  personal, business, or micro-lending, our solution streamlines
                  the entire process—from customer onboarding and credit checks
                  to loan approval and repayment tracking.
                </Text>
              </Flex>
              <Flex>
                <Text>
                  With a focus on simplicity, reliability, and scalability, we
                  aim to empower businesses to offer seamless lending
                  experiences to their customers. We're committed to providing
                  innovative solutions that help our partners grow and succeed
                  in today’s fast-paced financial landscape.
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={6}
            width={"100%"}
            display={"flex"}
            flexDirection={"row"}
            position={"relative"}
          >
            <Flex
              bottom={"4%"}
              left={"-8%"}
              width={"334px"}
              height={"496px"}
              position={"absolute"}
              zIndex={"2"}
            >
              <Image
                src={abt1}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Flex>

            <Flex
              position="absolute"
              top={"0"}
              right={"0"}
              width={"334px"}
              height={"496px"}
              bgColor={"#D6510F"}
              borderRadius={"10px"}
              overflow={"hidden"}
              zIndex={"1"}
            >
              <Image
                src={abt2}
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default AboutUs;
