import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Int1 from "../assets/Images/Int1.png"
import Int2 from "../assets/Images/Int2.png"
import Int3 from "../assets/Images/Int3.png";
import Int4 from "../assets/Images/Int4.png";


const Integrations = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        px={"40px"}
        py={"80px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"15px"}
      >
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={900}
            fontSize={"42px"}
            color={"#000000"}
            textAlign={"center"}
          >
            Seamless Integrations.
          </Text>
        </Flex>
        <Flex width={"650px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={400}
            fontSize={"18px"}
            textAlign={"center"}
          >
            Our loan software seamlessly integrates with your existing
            CoreBanking Application, including BankOne, Mifos, Tyche and Mambu.
            This eliminates any migration or data synchronisation issues and
            concerns.
          </Text>
        </Flex>

        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Flex>
            <Box width={"273px"} height={"270px"}>
              <Image src={Int1} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            width={"193px"}
            height={"180px"}
            borderRadius={"15px"}
            border={"1px solid #00000033"}
            mr={"50px"}
          >
            <Box width={"197.23px"} height={"149px"}>
              <Image src={Int2} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            width={"220px"}
            height={"180px"}
            borderRadius={"15px"}
            border={"1px solid #00000033"}
          >
            <Box width={"215px"} height={"74px"}>
              <Image src={Int3} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
          <Flex>
            <Box width={"280px"} height={"270px"}>
              <Image src={Int4} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Integrations
