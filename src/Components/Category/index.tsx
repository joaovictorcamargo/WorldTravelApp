import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import Separator from "../Separator";

interface CategoryProps {
    text: string
}

export default function Category({text}: CategoryProps) {
    return (
        <><Flex
            justifyContent="space-between"
            alignItems="center"
            mx="0.75rem"
        >
            <Text
                color="gray.300"
                fontWeight="bold"
                fontSize="sm"
            >{text}</Text>

            <Icon as={AiOutlinePlus} h="0.819rem" w="1.125rem" color="gray.300" mr="0.375rem" />
        </Flex><Flex>
                <Separator />
            </Flex></>
    )
}