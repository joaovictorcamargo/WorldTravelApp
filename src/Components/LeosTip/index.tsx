import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box, Image, Text } from "@chakra-ui/react"

export default function LeosTips() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        baths: 2,
        TipFirstBreakpoint: 'Pergolado: inspire-se com',
        TipSecondBreakPoint: 'imagens e confira dicas',
        TipThirdBreackpoint: 'incríveis!',
      }
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Text
          color="gray.900"
          fontSize="lg"
          fontWeight="bold"
          >{property.TipFirstBreakpoint}<br/>{property.TipSecondBreakPoint}<br/>{property.TipThirdBreackpoint}</Text>
        </Box>
      </Box>
    )
  }
    