  import React,{ useCallback, useState } from "react";
  import { SearchIcon } from '@chakra-ui/icons'
  import { useRouter } from "next/router";
  import { Box, Flex, Image, Text } from "@chakra-ui/react";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
  import { AiOutlineHome } from "react-icons/ai";
  import TabScreen from "../TabScreen";

  export const BasicExample = () => {
    const [activeTab, setActiveTab] = useState('Home')

      return (
          
          <Flex position="sticky"
            bottom="0"
            pt="1.313rem"
            variant="unstyled"
            px="0rem"
            py="1.313rem"
            backgroundColor="rgba(246, 246, 246, 1)"
            h="4.875rem" 
           pl="1"
            >
          <Flex
          
          >
            <Flex
            
            >
          <TabScreen
          
          tabIcon="url(/home.svg) no-repeat center/contain"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          title="Home"
          />
          </Flex>
          <TabScreen 
          tabIcon="url(/catalog.svg) no-repeat center/contain" 
          setActiveTab={setActiveTab}
          activeTab={activeTab} 
          title="Categorias"
          />
          <Flex
  
          >
        <Flex
        position="relative"
        >
          <TabScreen 
          tabIcon="url(/shopping_cart.svg) no-repeat center/contain"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          title="Carrinho"
        
          />
          </Flex>
            <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="4"
          left="51%"

          h="0.875rem"
          w="0.875rem"
          borderRadius="50%"
          backgroundColor="rgba(0, 80, 47, 1)"
          >
            <Text
            fontSize="xs"
            color="rgba(247, 232, 12, 1)"
            fontWeight="bold"
            >
              3
            </Text>
            
          </Flex>
          </Flex>
          <TabScreen
         tabIcon="url(/search.svg) no-repeat center/contain"
          setActiveTab={setActiveTab}
          activeTab={activeTab} 
          title="Busca"
        
          />
          <Flex>
          <TabScreen 
          tabIcon="url(/user.svg) no-repeat center/contain"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          title="Conta"
          />
          </Flex>
            </Flex>
          
      
      
        </Flex>
    
      );
    };