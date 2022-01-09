import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Infos() {
    return (
        <Flex
        align="center"
        justifyContent="space-between"
        >
            <Flex
            direction="column"
            justify="space-between"
            align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                fontSize={["2xl", "5xl"]}
                color="yellow.400"
                fontWeight="500"
                >
                    50
                </Heading>
                <Text
                fontWeight="500"
                fontSize={["md", "xl"]}
                color="gray.700"
                >Países</Text>
            </Flex>

        </Flex>
    )
}