import { Box } from "@chakra-ui/react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Solutions from "./components/Solutions"
import Integrations from "./components/Integrations";
import Features from "./components/Features";
import BusinessSolution from "./components/BusinessSolution";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import TrustedBy from "./components/TrustedBy";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Box position={'relative'}>
        <Header />
        <Banner />
        <Solutions />
        <Integrations />
        <Features />
        <BusinessSolution />
        <AboutUs />
        <Mission />
        <TrustedBy />
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
}

export default App
