import { Box, Button, Flex, Grid, GridItem, Image, Input, Text, Textarea } from "@chakra-ui/react";
import CC from '../assets/Images/CCUS.png'

const ContactUs = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        px={"40px"}
        py={"60px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"15px"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} mx={"auto"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={900}
            fontSize={"42px"}
            color={"#000000"}
            textAlign={"center"}
          >
            Contact Us
          </Text>
        </Flex>
        <Grid templateColumns="repeat(12, 1fr)" gap={"80px"} pt={'50px'}>
          <GridItem colSpan={6}>
            <Flex
              width={"500px"}
              height={"500px"}
              bgColor={"#021266"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"20px"}
            >
              <Box width={"453px"} height={"453px"} mt={"46px"}>
                <Image src={CC} width={"100%"} height={"100%"} />
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={6}>
            <Flex direction={"column"} gap={"30px"}>
              <Flex width={"500px"}>
                <Text
                  fontSize={"16px"}
                  fontWeight={600}
                  fontFamily={"Nunito Sans"}
                  color={"#000"}
                >
                  Connect with us to schedule a platform demonstration and
                  explore potential collaboration opportunities. Complete the
                  form provided, and we'll reach out to you promptly.
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                  >
                    Name
                  </Text>
                  <Input
                    placeholder="Full Name"
                    type="text"
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                  >
                    Business email
                  </Text>
                  <Input
                    placeholder="myname@company.com"
                    type="email"
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                  >
                    Company
                  </Text>
                  <Input
                    placeholder="Company Name"
                    type="text"
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Flex direction={"column"} gap={"3px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                  >
                    Please share anything that will help prepare for our meeting
                  </Text>
                  <Textarea
                    placeholder="Message..."
                    fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Nunito Sans"}
                    color={"#000"}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Flex pt={'10px'}>
                  <Button
                    variant={"none"}
                    borderRadius={"10px"}
                    bgColor={"#D6510F"}
                    color={"#FFFFFF"}
                    fontFamily={"DM Sans"}
                    fontWeight={600}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                  >
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default ContactUs;
