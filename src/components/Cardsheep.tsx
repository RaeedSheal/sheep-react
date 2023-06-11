import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

interface sheep {
    sheepName: string;
    img: string;
    weight: string;
}

const Cardsheep = (props: sheep) => {
    return (
        <>
            <Card maxW="sm">
                <CardBody>
                    <Image src={props.img} alt="sheep" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{props.sheepName}</Heading>

                        <Text color="teal.600" fontSize="2xl">
                            Weight: {props.weight}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
};

export default Cardsheep;
