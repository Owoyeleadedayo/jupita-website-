import { Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"

const Solutions = () => {
    const cards = [
      {
        title: "Loan Origination",
        subTitle:
          "A user-friendly interface to guide borrowers through the loan application process, ensuring a seamless and intuitive experience",
      },
      {
        title: "Credit Check and Analysis",
        subTitle:
          "Integrate with three credit bureaus for a comprehensive credit report with a single API call, providing reliable borrower insights.",
      },
      {
        title: "Bank Statement Analysis",
        subTitle:
          "Analyze statements uploaded as PDFs or directly through integrations with Mono, Okra, and MBS for accurate financial assessments",
      },
      {
        title: "AI Driven Credit Decision Engine",
        subTitle:
          "Automate loan decisions based on Ai models, business logic and scorecard outputs, ensuring efficient and accurate lending",
      },
      {
        title: "Client Management",
        subTitle:
          "Manage client information effectively, track interactions, and maintain detailed records to enhance customer relationships",
      },
      {
        title: "Debt Recovery",
        subTitle:
          "Streamline debt recovery processes with automated follow-ups, repayment tracking, and comprehensive reporting tools",
      },
    ];
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
            A Global Loan Cycle System designed for any
            <br /> product, available anywhere.
          </Text>
        </Flex>
        <Flex width={"650px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={400}
            fontSize={"18px"}
            textAlign={"center"}
          >
            Say goodbye to the limitations of outdated systems with a modern
            loan origination, underwriting and collections platform that's
            flexible enough to fit any lending need.
          </Text>
        </Flex>

        <SimpleGrid spacing={5} columns={3} pt={"40px"}>
          {cards.map((card, index) => (
            <Card
              key={index}
              width={"270px"}
              height={"230px"}
              direction={"column"}
              boxShadow={"lg"}
              border={"1px solid #F9F2F2"}
            >
              <CardHeader margin={0} paddingY={"10px"}>
                <Heading
                  fontFamily={"Nunito Sans"}
                  fontWeight={900}
                  fontSize={"28px"}
                  color={"#207EDF"}
                  textAlign={"start"}
                >
                  {card.title}
                </Heading>
              </CardHeader>
              <CardBody margin={0} paddingTop={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000"}
                >
                  {card.subTitle}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Solutions
