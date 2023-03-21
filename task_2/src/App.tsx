import {ChakraProvider, Flex} from '@chakra-ui/react'
import React from 'react'
import mainTheme from './themes/mainTheme'

const App = () => {
   return (
      <ChakraProvider theme={mainTheme}>
         <Flex />
      </ChakraProvider>
   )
}

export default App
