import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
interface user {
    username: string;
    password: string;
    email: string;
}
export default function Signupform() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [newuser, setNewUser] = useState<user>({
        username: "",
        password: "",
        email: "",
    });
    const ValidateInput = () => {
        if (
            newuser.username == "" ||
            newuser.password == "" ||
            newuser.email == ""
        ) {
            alert("Fill all input");
            return;
        }
        if (newuser.password.length <= 4) {
            alert("Password must be over 4 characters");
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newuser.email))
            //regualr expressions I don't know how it works exactly i just copy paste it
            alert("Email is wrong");
        localStorage.setItem("user", JSON.stringify(newuser));
        navigate("/login");
    };

    return (
        <Flex align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"3xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="userName" isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                onChange={(e) => {
                                    setNewUser({
                                        ...newuser,
                                        username: e.target.value,
                                    });
                                }}
                            />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                onChange={(e) => {
                                    setNewUser({
                                        ...newuser,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    onChange={(e) => {
                                        setNewUser({
                                            ...newuser,
                                            password: e.target.value,
                                        });
                                    }}
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"teal.400"}
                                color={"white"}
                                _hover={{
                                    bg: "teal.500",
                                }}
                                onClick={() => {
                                    ValidateInput();
                                }}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user?{" "}
                                <Link href="/login" color={"teal.400"}>
                                    Login
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
