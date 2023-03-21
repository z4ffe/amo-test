import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import Home from './pages/Home'
import mainTheme from './themes/mainTheme'

const App: React.FC = (): JSX.Element => {
   return (
      <ChakraProvider theme={mainTheme}>
         <Home />
      </ChakraProvider>
   )
}

export default App
