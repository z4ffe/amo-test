import {Flex, Image, Link, ListItem, Text, UnorderedList, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import logoWelbex from '../assets/images/logo_welbex.svg'
import Navbar from './Navbar'
import telegram from '../assets/images/telegram.svg'
import viber from '../assets/images/viber.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Header: React.FC = (): JSX.Element => {
   const [isMobile] = useMediaQuery('(max-width: 320px)')

   return (
      <Flex position={['static', 'static']} w='100%' h={['55px', '73px']} margin={['0', '46px 150px 0']} top='0' left='0'>
         {!isMobile ? (
            <>
               <Flex flexDir='column' gap='10px'>
                  <a href='/'>
                     <Image src={logoWelbex} />
                  </a>
                  <Text fontFamily='Montserrat' fontStyle='normal' fontWeight='300' fontSize='10px' w='135px' lineHeight='12px'>
                     крупный интегратор CRM в Росcии и ещё 8 странах
                  </Text>
               </Flex>
               <Navbar />
               <Flex marginLeft='145px' paddingTop='3px'>
                  <Link href='callto:+75555555555'>+7 555 555-55-55</Link>
               </Flex>
               <Flex marginLeft='33px' paddingTop='3px' gap='30x'>
                  <UnorderedList display='flex' gap='30px' listStyleType='none'>
                     <ListItem>
                        <a href='https://telegram.org' target='_blank' rel='noreferrer'>
                           <Image src={telegram} />
                        </a>
                     </ListItem>
                     <ListItem>
                        <a href='https://viber.com' target='_blank' rel='noreferrer'>
                           <Image src={viber} />
                        </a>
                     </ListItem>
                     <ListItem>
                        <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
                           <Image src={whatsapp} />
                        </a>
                     </ListItem>
                  </UnorderedList>
               </Flex>
            </>
         ) : (
            <Navbar />
         )}
      </Flex>
   )
}

export default Header
