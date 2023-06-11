import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface user {
    email: string;
    password: string;
}
export default function Loginform() {
    const [user, setUser] = useState<user>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const ValidateInput = () => {
        const regesteredUser = JSON.parse(localStorage.getItem("user") || "");
        if (
            user.email == regesteredUser.email &&
            user.password == regesteredUser.password
        ) {
            //Logs in the user
            localStorage.setItem("isLoggedin", "true");
            navigate("/home");
        } else {
            alert("Email or password are incorrect");
        }
        //Navigate to
    };
    return (
        <Flex
            // minH={"100vh"}
            align={"center"}
            justify={"center"}
            // bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Log in to your account</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                onChange={(e) =>
                                    setUser({ ...user, email: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            ></Stack>
                            <Button
                                bg={"teal.400"}
                                color={"white"}
                                _hover={{
                                    bg: "teal.500",
                                }}
                                onClick={() => {
                                    ValidateInput();
                                }}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
