import { Flex, Image, Link } from "@chakra-ui/react";


export default function FloatingWhatsApp() {
    return (
        <Link href='https://chakra-ui.com' isExternal>
  

        <Flex
        position="fixed"
        bottom="6rem"
        right="1rem"
        >

         <Image
         src="/whatsapp_contact.png"
         h="6rem"
         w="6rem"
         
         />

        </Flex>
        </Link>
    )
}