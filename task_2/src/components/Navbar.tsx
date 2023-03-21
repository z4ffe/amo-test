import {Flex, Link, ListItem, UnorderedList, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import navbarData from '../data/navbarData'

const Navbar: React.FC = (): JSX.Element => {
   const [isMobile] = useMediaQuery('(max-width: 320px)')

   return (
      <Flex paddingTop='3px' marginLeft={['16px', '38px']}>
         {!isMobile ? (
            <UnorderedList display='flex' listStyleType='none' gap='30px'>
               {navbarData.map((el) => (
                  <ListItem key={el.id}>
                     <Link href={el.path}>{el.name}</Link>
                  </ListItem>
               ))}
            </UnorderedList>
         ) : (
            <UnorderedList display='flex' listStyleType='none' gap='16px' margin='0'>
               {navbarData
                  .filter((el) => el.mobile)
                  .map((el) => (
                     <ListItem key={el.id}>
                        <Link href={el.path} fontWeight='500' textTransform='uppercase' fontSize='12px'>
                           {el.name}
                        </Link>
                     </ListItem>
                  ))}
            </UnorderedList>
         )}
      </Flex>
   )
}

export default Navbar
