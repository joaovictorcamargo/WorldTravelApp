
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

interface CategoryName {
    text: string
}

export default function Category({text}: CategoryName) {
    return (
        <Accordion allowToggle>
  <AccordionItem mx="1rem">
    <h2>
      <AccordionButton my="0.938rem">
        <Box flex='1' textAlign='left'  color="gray.300">
            <Text
            fontSize="sm"
            fontWeight="bold"
            >
          {text}
          </Text>
        </Box>
        <AccordionIcon  color="gray.300"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  color="gray.300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
    )
}