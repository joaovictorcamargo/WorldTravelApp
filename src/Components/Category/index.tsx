
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

interface CategoryName {
    text: string
}

export default function Category({text}: CategoryName) {
    return (
      <Accordion allowMultiple>
     
    
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Text
                  color="gray.300"
                  >
                  Section 2 title
                  </Text>
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize='12px' color="gray.300" />
                ) : (
                  <AddIcon fontSize='12px' color="gray.300"/>
                )}
              </AccordionButton>
            </h2>
            
            <AccordionPanel pb={4}>
              <Text
              color="gray.300"
              >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
    )
}