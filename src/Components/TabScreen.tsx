import { Box, Button, Icon, Image, Tab, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";

interface TabBottomProps {
  title: string;
  activeTab: string;
  setActiveTab: any;
  tabIcon: string;
}

export default function TabScreen({
  activeTab,
  setActiveTab,
  title,
  tabIcon
}: TabBottomProps) {
  return (
    <>
      <Button
        onClick={() => setActiveTab(title)}
        flexDir="column"
        alignItems="center"
        colorScheme="transparent"
        h="3.125rem"
        w="3.15rem"
        ml="1.2rem"
      >
        <Box
          
          bg={ activeTab === title
            ? "rgba(0, 80, 47, 1)"
            : "rgba(102, 102, 102, 1)"}
          sx={{
              w: "100%",
              h: "100%",
            mask: tabIcon,
            maskSize: "100%",
            maskRepeat: 'no-repeat'
          }}
        />

        <Tab>   
          <Text
            fontSize="xs"
            fontWeight={activeTab === title ? "bold" : "normal"}
            color={
              activeTab === title
                ? "rgba(0, 80, 47, 1)"
                : "rgba(102, 102, 102, 1)"
            }
          >
            {title}
          </Text>
        </Tab>
      </Button>
    </>
  );
}
