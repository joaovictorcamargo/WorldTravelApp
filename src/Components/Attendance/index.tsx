import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import {AiOutlinePhone} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';

interface AttendanceProps {
    src: string,
    text?: string
}

export default function Attendance({src, text}: AttendanceProps) {
    return (
        <Flex
        mt="3.25rem"
        
    flexDir="row"
    alignItems="center"
    >
        
        <Image
    w="1.125rem"
    h="1.313rem"
    objectFit='cover'
    src={src}
    alt='Central de Atendimento'
  />

      <Text
      fontSize="sm"
      lineHeight="5"
      fontWeight="semibold"
      ml="1.125rem"
      >{text}</Text>

      <Icon as={MdKeyboardArrowRight} w={6} h={6}  color="gray.600"/>

    </Flex>
    )
}