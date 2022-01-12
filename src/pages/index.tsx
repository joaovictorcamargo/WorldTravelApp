import { Flex, Heading, Icon, Image, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Banner from "../Components/Banner";
import Caracteristics from "../Components/Caracteristics";
import Header from "../Components/Header";
import Separator from "../Components/Separator";
import Slider from "../Components/Slider";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import Attendance from "../Components/Attendance";
import {BsWhatsapp} from 'react-icons/bs';
import Category from "../Components/Category";


export default function Home() {
  return (
    <>
    <Flex
    flexDir="column"
    alignItems="center"
    >
<Flex
    h="11.5rem" w="100%" backgroundColor="gray.300" alignItems="center" flexDir="column"
  >
     <Icon as={HiOutlineMail} h="1.5rem" w="1.5rem" mt="0.75rem" />

     <Text
     fontSize="md"
      textAlign="center"
      mt="1.313rem"
      
     >
       Cadastre-se e receba as melhores<br/>
       ofertas no seu email
     </Text>
     

     <InputGroup
     w="19.125rem"
     mt="1.438rem"
     >

       <Input

       type="text"
       placeholder="E-mail"
       _placeholder={{color: 'gray.100'}}
       borderRadius="1.313rem"
       backgroundColor="gray.800"
       />

         <InputRightAddon
         color="gray.300"
         fontWeight="bold"
         fontSize="xs"
         lineHeight="4"
         fontWeight="bold"
         children='Enviar'
         borderRadius="1.313rem"
         backgroundColor="gray.600"
         />

     </InputGroup>
     </Flex>
     <Image
     my="2.313rem"
    h="2.75rem"
    w="4.625rem"
    src='/leo.png'
    alt='Logo Empresa Leo'
  />

  <Flex
  alignItems="center"
  mb="2.25rem"
  >
  <Icon as={BsInstagram} h="1.313rem" w="1.125rem" color="gray.300" mr="1.375rem"/>
  <Icon as={BsFacebook} h="1.313rem" w="1.125rem" color="gray.300" />
  <Icon as={BsLinkedin} h="1.313rem" w="1.125rem" color="gray.300" ml="1.375rem"/>
  <Icon as={BsYoutube} h="1.313rem" w="1.125rem" color="gray.300" ml="1.375rem"/>

  </Flex>
 
  </Flex>

  

<Category

/>

<Category

/>

<Category

/>

  <Flex
  
  mt="17px"
  h="23.438rem"
  w="100%"
  backgroundColor="gray.300"
  flexDir="column"
  >

<Flex
 flexDir="column"
alignItems="center"
>
    <Text
    mt="36px"
    mb="1px"
    color="gray.600"
    fontSize="md"
    lineHeight="6"
    fontWeight="bold"
    >Central de Atendimento</Text>

    <Text
      fontSize="sm"
      lineHeight="5"
      fontWeight="semibold"
    >Segunda a sexta das 08h30 às 17h00</Text>
</Flex>
<Flex
pl="1.938rem"
flexDir="column"
>
    <Attendance
    text="0800-591-0127"
    src="/phone.png"
    /> 

<Attendance
    text="Atendimento por Wathsapp"
    src="/whatsapp-2x.png"
    /> 

<Attendance
src="/question.png"
    text="Central Leo de Apoio ao Cliente"
    /> 
 </Flex>

    
  </Flex>

<Flex
mt="1.313rem"
mb="0.777rem"
justifyContent="center"
>
  <Text
  color="gray.300"
  fontSize="sm"
  >Formas de pagamento</Text>
</Flex>
  <Flex
  justifyContent="center"
  mb="1rem"
  >

<Image
    h="2.313rem"
    w=""
    src='/image_15.png'
    alt='Logo MasterCard'
  />


  </Flex>

  <Flex
  justifyContent="center"
  >

  <Text
  color="gray.900"
  fontSize="0.625rem"
  
  >Preços e formas de pagamento são exclusivos para vendas via internet</Text>

</Flex>

<Flex
my="2.125rem"
>
<Separator/>
</Flex>

<Flex
justifyContent="center"
>

  <Text
  color="gray.300"
  fontSize="sm"
  mb="1.025rem"
  >Certificações</Text>
</Flex>
  <Flex
  flexDir="row"
  justifyContent="center"
  >
      


<Image
    h="2.313rem"
    w="5.75rem"
    src='/redamee.png'
    alt='Redame'
    mr="0.438rem"
  />

  
<Image
    h="2.313rem"
    w="5.75rem"
    src='/blindadoo.png'
    alt='Site Blindado'
    
  />

  
<Image
    h="2.313rem"
    w="5.75rem"
    src='/googlee.png'
    alt='Verificação do Google'
    ml="0.438rem"
  />
  </Flex>

<Flex

>


  
</Flex>

<Flex
my="3.219rem"
>
<Separator/>
</Flex>

<Flex
mb="2.875rem"
ml="2.406rem"
flexDir="column"
>

  <Text
  color="gray.1000"
  fontSize="14px"
  fontWeight="bold"
  >Leo Madeiras, Máquinas e Ferragens</Text>
  <Text
  color="gray.1000"
  fontSize="14px"
  fontWeight="500"
  >Rua Bartolomeu Paes, 136 - 0800-591-0127</Text>
   <Text
  color="gray.1000"
  fontSize="14px"
  fontWeight="500"
  >CEP: 05092-000 - São Paulo/SP</Text>
    <Text
  color="gray.1000"
  fontSize="14px"
  fontWeight="500"
  >CNPJ: 61.069.373/0001-03</Text>
    <Text
  color="gray.1000"
  fontSize="14px"
  fontWeight="500"
  >Inscrição Estadual: 112.625.312.111</Text>
</Flex>
 


 </>
 

  
    
  )
}




