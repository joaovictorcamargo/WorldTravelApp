import { Flex, PopoverTrigger } from "@chakra-ui/react";
import Cities from "../../Components/Cities";
import Content from "../../Components/Content";
import ContinentBanner from "../../Components/ContinentBanner";
import Header from "../../Components/Header";

export default function continent() {
    return (
        <Flex
        direction="column"
        >
            <Header/>
            <ContinentBanner/>

            <Flex
            direction="column"
            maxWidth="1160px"
            mx="auto"
            mb="18"
            px="1rem"
            >
                <Content/>
                <Cities/>
            </Flex>

        </Flex>
    )
}