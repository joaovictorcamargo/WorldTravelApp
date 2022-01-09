import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
    return (
        <Box
        borderRadius="4px"
        overflow="hidden"
        
        >
            <Image
            src="/lucia-hatalova-7A15094rpp0-unsplash.jpg"
            h="170px"
            w="100%"
            />
            <Flex
            p="6"
            alignItems="center"
            
            justify="space-between"
            bg="white"
            border="1px"
            borderColor="yellow.300"
            borderTop="0"
            >
                <Flex
                direction="column"
                
                >
                    <Heading
                    fontSize="xl"
                    fontWeight="500"
                    >Londres</Heading>
                    <Text
                    mt="3"
                    fontSize="md"
                    color="gray.500"
                    fontWeight="500"
                    >Reino Unido</Text>
                </Flex>
                <Image
                src="/reiniU.png"
                h="30px"
                w="30px"
                borderRadius="15"
                objectFit="cover"
                />
            </Flex>
        </Box>
    )
}