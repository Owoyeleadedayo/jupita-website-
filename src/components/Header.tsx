import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/Images/JLogo.png"

const Header = () => {
    const Links = [
        { name: "Solutions", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" },
    ]
  return (
    <>
      <Flex
        py={"20px"}
        px={"40px"}
        bgColor={'#FFFFFF'}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"0 2px 4px rgba(0, 0, 0, 0.1)"}
        position={"fixed"}
        top={"0"}
        left={'0'}
        width={'100%'}
        zIndex={1000}
      >
        <Flex>
          <Box width={"159px"} height={"37px"}>
            <Image src={Logo} width={"100%"} height={"100%"} />
          </Box>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          {Links.map((link, index) => (
            <Flex key={index} mr={"20px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                fontSize={"16px"}
              >
                {link.name}
              </Text>
            </Flex>
          ))}
          <Flex
            px={"20px"}
            py={"10px"}
            borderRadius={"80px"}
            bgColor={"#D6510F"}
          >
            <Text
              color={"#FFFFFF"}
              fontFamily={"DM Sans"}
              fontWeight={600}
              fontSize={"13px"}
              textTransform={"uppercase"}
            >
              Request Demo
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Header
