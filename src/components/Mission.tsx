import { Divider, Flex, Text } from "@chakra-ui/react"

const Mission = () => {
  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"80px"}
        px={"40px"}
        py={"40px"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          gap={"10px"}
        >
          <Text fontSize={"2xl"}>Mission</Text>
          <Divider
            border={"3px solid #D6510F"}
            borderRadius={"8px"}
            width={"200px"}
          />
          <Flex width={"400px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#000"}
              textAlign={"start"}
            >
              To empower financial institutions globally by providing a
              flexible, reliable, and modern loan origination platform that
              simplifies the lending process and drives growth through
              innovation and customization.
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"450px"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          gap={"10px"}
        >
          <Text fontSize={"2xl"}>Vision</Text>
          <Divider
            border={"3px solid #207EDF"}
            borderRadius={"8px"}
            width={"200px"}
          />
          <Flex>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#000"}
              textAlign={"start"}
            >
              To be the leading global provider of adaptable loan origination
              solutions, transforming the lending industry by enabling
              businesses to deliver seamless, customer-centric financial
              products worldwide.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Mission
