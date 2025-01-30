import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import Lady from "../assets/Images/bb.png"
// import Stat from '../assets/Images/stats.png'

const Banner = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        px={"40px"}
        gap={"10px"}
        mt={"100px"}
        mb={'60px'}
      >
        <Grid templateColumns="repeat(12, 1fr)" gap={"40px"}>
          <GridItem
            justifyContent={"center"}
            alignItems={"center"}
            my={"auto"}
            colSpan={6}
          >
            <Flex direction={"column"} gap={"20px"}>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"42px"}
                  lineHeight={"50px"}
                  color={"#000000"}
                >
                  Revolutionize Lending,
                  <br /> with Inclusive Technology
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"18px"}
                >
                  Empowering under-served communities through smart, efficient,
                  and <br /> fair loan origination
                </Text>
              </Flex>
              <Flex>
                <Button
                  variant={"none"}
                  px={"20px"}
                  py={"10px"}
                  borderRadius={"80px"}
                  bgColor={"#D6510F"}
                  color={"#FFFFFF"}
                  fontFamily={"DM Sans"}
                  fontWeight={600}
                  fontSize={"13px"}
                  textTransform={"uppercase"}
                >
                  get started
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            bgColor={"#0328EE1A"}
            justifyContent={"center"}
            alignItems={"center"}
            colSpan={6}
            borderRadius={"50%"}
            position={"relative"}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"415px"} height={"600px"}>
                <Image src={Lady} width={"100%"} height={"100%"} />
              </Box>
            </Flex>
            {/* <Flex pb={'140px'} position={"absolute"}>
              <Box width={"231px"} height={"140px"}>
                <Image src={Stat} width={"100%"} height={"100%"} />
              </Box>
            </Flex> */}
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}

export default Banner
