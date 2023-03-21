import {ChakraTheme, extendTheme} from '@chakra-ui/react'

const mainTheme = extendTheme({
   styles: {
      global: {
         'html, body': {
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            scrollBehavior: 'smooth',
            backgroundColor: '#0E1014',
         },
         '#root': {
            flexDirection: 'column',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            maxWidth: '1440px',
            backgroundColor: '#0E1014',
         },
         a: {
            textDecoration: 'none',
         },
      },
   },
   fonts: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
   },
   colors: {},
   components: {
      Heading: {
         baseStyle: {
            textAlign: 'center',
            fontSize: ['36px', '48px'],
            color: '#E4E5EA',
         },
      },
      Text: {
         baseStyle: {
            fontSize: ['14px', '16px'],
            color: '#E4E5EA',
         },
      },
      Link: {
         baseStyle: {
            '&:hover': {
               textDecoration: 'none',
            },
         },
      },
   },
   breakpoints: {
      md: '20em', // 414px
      lg: '90.5em', // 1440px
   },
}) as ChakraTheme

export default mainTheme
