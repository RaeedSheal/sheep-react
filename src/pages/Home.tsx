import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";
import { useNavigate } from "react-router-dom";
import data from "../assets/data.json";
import { Text, Flex, Grid, Input } from "@chakra-ui/react";
import Cardsheep from "../components/Cardsheep";

const Home = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const navigate = useNavigate();

    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin") || "");
    useEffect(() => {
        if (!(isLoggedin == true)) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Navbar />
            <Text fontSize={"5xl"} align={"center"}>
                Happy Eid
            </Text>
            <Flex mx={5} my={3}>
                <Input
                    value={searchInput}
                    placeholder="Enter a name"
                    size="md"
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
            </Flex>

            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
                gap={5}
                mx={5}
                my={3}
            >
                {data
                    .filter((sheep) => {
                        if (searchInput == "") return sheep;
                        else if (
                            sheep.sheepName
                                .toLowerCase()
                                .includes(searchInput.toLowerCase())
                        )
                            return sheep;
                    })
                    .map((sheep) => {
                        return (
                            <Cardsheep
                                sheepName={sheep.sheepName}
                                img={sheep.img}
                                weight={sheep.weight}
                                key={sheep.id}
                            />
                        );
                    })}
            </Grid>
            <Footerbar />
        </>
    );
};

export default Home;
