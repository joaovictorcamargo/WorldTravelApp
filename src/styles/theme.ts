import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
          100: 'rgba(0, 0, 0, 0.24)',
      300: 'rgba(0, 80, 47, 1)',
      600: 'rgba(255, 242, 0, 1)',
      800: 'rgba(255, 255, 255, 1)',
      700: 'rgba(255, 255, 255, 1)',
      900: 'rgba(160, 174, 192, 1)',
      1000: 'rgba(113, 128, 150, 1)'
        },
      },
      fonts: {
        heading: 'Poppins',
        body: 'Poppins'
      },
      styles: {
        global: {
          body: {
            bg: 'gray.800',
            color: 'gray.700'
          }
        }
      },
      
}) 