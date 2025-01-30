import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import Logo from '../assets/Images/FLogo.png'
import { FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bg={"#263238"}
        px={"40px"}
        py={"20px"}
        direction={"column"}
        gap={"30px"}
      >
        <Flex direction={"column"} gap={"10px"}>
          <Flex direction={"column"}>
            <Box width={"159px"} height={"37px"}>
              <Image src={Logo} width={"100%"} height={"100%"} />
            </Box>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"13px"}
              color={"#FFFFFF"}
            >
              Powered by Celeris Technology Limited
            </Text>
          </Flex>
          <Flex>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"13px"}
              color={"#FFFFFF"}
              lineHeight={"23px"}
            >
              KM 4 Idi Iroko Road, Ota Ogun State
              <br /> Email: info@getjupita.com
              <br />
              Call: +2349065512525
            </Text>
          </Flex>
          <Flex gap={"15px"}>
            <Flex
              width={"35px"}
              height={"35px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              bgColor={"#3c464c"}
            >
              <FiInstagram fontSize={"20px"} color="#FFF" />
            </Flex>
            <Flex
              width={"35px"}
              height={"35px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              bgColor={"#3c464c"}
            >
              <FaDribbble fontSize={"20px"} color="#FFF" />
            </Flex>
            <Flex
              width={"35px"}
              height={"35px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              bgColor={"#3c464c"}
            >
              <FaTwitter fontSize={"20px"} color="#FFF" />
            </Flex>
            <Flex
              width={"35px"}
              height={"35px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              bgColor={"#3c464c"}
            >
              <FaYoutube fontSize={"20px"} color="#FFF" />
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} mx={"auto"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={400}
            fontSize={"13px"}
            color={"#FFFFFF"}
          >
            Copyright © 2024 Celeris Technology Limited. All rights reserved
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer
