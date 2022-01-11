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


export default function Home() {
  return (
    <>
    <Flex
    flexDir="column"
    alignItems="center"
    >
<Flex
    h="182px"
    w="100%"
    backgroundColor="gray.300"
    alignItems="center"
    flexDir="column"
  >
     <Icon as={HiOutlineMail} size="63px" mt="21px" />

     <Text
     fontSize='16px'
      textAlign="center"
      mt="13px"
      
     >
       Cadastre-se e receba as melhores<br/>
       ofertas no seu email
     </Text>
     

     <InputGroup
     w="306px"
     mt="3"
     >

       <Input
      type="text"
      placeholder="E-mail"
      borderRadius="none"
      borderTopLeftRadius="21px"
      borderBottomLeftRadius="21px"
      backgroundColor="gray.800"
      focusBorderColor='gray.700'
       />

         <InputRightAddon
        color="gray.300"
        fontWeight="bold"
        children='Enviar'
        borderRadius="21px"
        backgroundColor="gray.600"
         />

     </InputGroup>
     </Flex>
     <Image
     my="60px"
    size='100px'
    objectFit='cover'
    src='/leo.png'
    alt='Logo Empresa Leo'
  />

  <Flex
  alignItems="center"
  >
  <Icon as={BsInstagram} size="25px" color="gray.300" mr="5"/>
  <Icon as={BsFacebook} size="25px" color="gray.300" />
  <Icon as={BsLinkedin} size="25px" color="gray.300" ml="5"/>
  <Icon as={BsYoutube} size="25px" color="gray.300" ml="5"/>

  </Flex>
 
  </Flex>

  <Flex>
  <Separator/>
  </Flex>

  <Flex
  justifyContent="space-between"
  alignItems="center"
  mx="5"
  >
  <Text
  color="gray.300"
  fontWeight="bold"
  >Institucional</Text>

<Icon as={AiOutlinePlus} size="35px" color="gray.300" mr="5"/>
  </Flex>

  <Flex>
  <Separator/>
  </Flex>

  <Flex
  justifyContent="space-between"
  alignItems="center"
  mx="5"
  >
  <Text
  color="gray.300"
  fontWeight="bold"
  >Ajuda</Text>

<Icon as={AiOutlinePlus} size="35px" color="gray.300" mr="5"/>
  </Flex>

  <Flex>
  <Separator/>
  </Flex>

  <Flex
  justifyContent="space-between"
  alignItems="center"
  mx="5"
  >
  <Text
  color="gray.300"
  fontWeight="bold"
  >Para Você</Text>

<Icon as={AiOutlinePlus} size="35px" color="gray.300" mr="5"/>
  </Flex>

  <Flex>
  <Separator/>
  </Flex>

  <Flex
  justifyContent="space-between"
  alignItems="center"
  mx="5"
  >
  <Text
  color="gray.300"
  fontWeight="bold"
  >Para Profissionais</Text>

<Icon as={AiOutlinePlus} size="35px" color="gray.300" mr="5"/>
  </Flex>

  <Flex
  px="40px"
  mt="17px"
  h="317px"
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
    fontWeight="bold"
    fontSize="16px"
    >Central de Atendimento</Text>

    <Text
    
    >Segunda a sexta das 08h30 às 17h00</Text>
</Flex>

    <Attendance
    text="0800-591-0127"
    icon={() => <AiOutlinePhone/>}
    /> 

<Attendance
    text="0800-591-0127"
    icon={() => <BsWhatsapp/>}
    /> 

<Attendance
icon={() => <AiOutlinePhone/>}
    text="0800-591-0127"
    /> 
 

    
  </Flex>

<Flex
mt="21px"
mb="13px"
justifyContent="center"
>
  <Text
  color="gray.300"
  fontSize="14px"
  fontWeight="bold"
  >Formas de pagamento</Text>
</Flex>
  <Flex
  justifyContent="center"
  mb="16px"
  >

<Image
    h="20px"
    w="30px"
    src='/master.png'
    alt='Logo MasterCard'
    mr="5"
  />

<Image
    h="20px"
    w="50px"
    src='/visa.png'
    alt='Logo Visa'
   
  />
  
<Image
    h="20px"
    w="30px"
    src='/barra.svg'
    alt='Código de barras'
    ml="5"
  />



  </Flex>

  <Flex
  justifyContent="center"
  >

  <Text
  color="gray.900"
  fontSize="10px"
  fontWeight="500"
  >Preços e formas de pagamento são exclusivos para vendas via internet</Text>

</Flex>

<Flex
my="24px"
>
<Separator/>
</Flex>

<Flex
justifyContent="center"
>

  <Text
  color="gray.300"
  fontSize="14px"
  fontWeight="500"
  mb="20px"
  >Certificações</Text>
</Flex>
  <Flex
  flexDir="row"
  justifyContent="center"
  >
      


<Image
    h="36px"
    w="71px"
    src='/redame.png'
    alt='Código de barras'
    ml="5"
  />

  
<Image
    h="36px"
    w="71px"
    src='/blindado.png'
    alt='Código de barras'
    ml="5"
  />

  
<Image
    h="36px"
    w="71px"
    src='/googlre.png'
    alt='Código de barras'
    ml="5"
  />
  </Flex>

<Flex

>


  
</Flex>

<Flex
my="24px"
>
<Separator/>
</Flex>

<Flex
mb="46px"
ml="20px"
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
  >Rua Bartolomeu Paes, 136 - 0800-591-0127 CEP:</Text>
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




