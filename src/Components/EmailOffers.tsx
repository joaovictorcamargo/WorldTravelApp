
import {forwardRef, ForwardRefRenderFunction} from 'react';
import { Flex, Icon, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { isValidEmail } from '@brazilian-utils/brazilian-utils';

const EmailSend = ({}, ref: any) => {
  

  function handleSignIn(e) {
    e.preventDefault();
    const valid = isValidEmail(ref.current.value);
    if(valid){ console.log('Email cadastrado')}
    else {console.log('Email Inválido')}
  }

    return (
        <Flex
    h="11.5rem" w="100%" backgroundColor="gray.300" alignItems="center" flexDir="column"
  >
     <Icon as={HiOutlineMail} h="1.5rem" w="1.5rem" mt="0.75rem" />
     
     <Flex
     flexDir="column"
     >
     <Flex
     fontSize="md"
      textAlign="center"
      mt="1.313rem"
      
     >
       <Text>Cadastre-se e receba</Text>
       <Text 
       fontSize="md"
       fontWeight="bold"
       ml="0.355rem"
       >as melhores</Text>
       
      
     </Flex>
     <Flex justifyContent="center"> 
     <Text 
     fontSize="md"
      fontWeight="bold"
       >ofertas</Text>
     <Text ml="0.355rem">no seu email</Text>
     </Flex>
     </Flex>
     
     
     <InputGroup
     as="form"
     onSubmit={handleSignIn}
     w="19.125rem"
     mt="1.438rem"
     >

       <Input
       type="text"
       placeholder="E-mail"
       color="#000"
       borderRadius="1.313rem"
       backgroundColor="gray.800"
       ref={ref}
       />

         <InputRightAddon
         as="button"
         type="submit"
        _hover={{ bg: '#d4c608'}}
         border="x"
         color="gray.300"
         fontSize="xs"
         lineHeight="4"
         fontWeight="bold"
         borderRadius="1.313rem"
         backgroundColor="gray.600"
         
         >Entrar</InputRightAddon>


     </InputGroup>
     </Flex>
    )
}

export const EmailSection = forwardRef(EmailSend);

function Email(Email: any, cadastrado: any) {
  throw new Error('Function not implemented.');
}


function cadastrado(Email: any, cadastrado: any) {
  throw new Error('Function not implemented.');
}
