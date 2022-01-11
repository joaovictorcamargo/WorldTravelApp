import { Flex, Icon, Text } from "@chakra-ui/react";
import {AiOutlinePhone} from 'react-icons/ai';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {IconType} from 'react-icons';

interface AttendanceProps {
    icon?: IconType,
    text?: string
}

export default function Attendance({icon, text}: AttendanceProps) {
    return (
        <Flex
        mt="37px"
        
    flexDir="row"
    alignItems="center"
    >
        
      <Icon as={icon}  size="25px" color="gray.600" ml="61px"/>

      <Text
      mx="18px"
      >{text}</Text>

      <Icon as={MdKeyboardArrowRight} w={6} h={6}  color="gray.600"/>

    </Flex>
    )
}