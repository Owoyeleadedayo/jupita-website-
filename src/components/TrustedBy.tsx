import { Box, Flex, Image, Text } from "@chakra-ui/react";
import T1 from '../assets/Images/t1.png'
import T2 from '../assets/Images/t2.png'
import T3 from "../assets/Images/t3.png";

const TrustedBy = () => {
    const img = [
        { id: 1, src: T1 },
        { id: 2, src: T2 },
        { id: 3, src: T3 },
    ]
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
            Trusted By
          </Text>
        </Flex>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          pt={"30px"}
        >
          {img.map((item, index) => (
            <Box key={index} width={"191px"} height={"70px"} mr={'100px'} >
              <Image
                src={item.src}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default TrustedBy;
