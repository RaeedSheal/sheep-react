import Footerbar from "../components/Footerbar";
import Navbar from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import Loginform from "../components/Loginform";

const Login = () => {
    return (
        <>
            <Navbar />
            <Flex h={"90vh"} justify={"center"} align={"center"}>
                <Loginform />
            </Flex>
            <Footerbar />
        </>
    );
};

export default Login;
