import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import Signupform from "../components/Signupform";

const Signup = () => {
    return (
        <>
            <Navbar />
            <Flex h={"90vh"} justify={"center"} align={"center"}>
                <Signupform />
            </Flex>
            <Footerbar />
        </>
    );
};

export default Signup;
