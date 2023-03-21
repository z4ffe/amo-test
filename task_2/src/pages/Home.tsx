import {Flex} from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Content from '../components/Content'
import backgroundMain from '../assets/images/backgroundMain.png'

const Home: React.FC = (): JSX.Element => {
   return (
      <Flex display='flex' flexDir='column' w='100%' backgroundImage={['', backgroundMain]} backgroundRepeat='no-repeat' backgroundSize='cover'>
         <Header />
         <Content />
         <Footer />
      </Flex>
   )
}

export default Home
