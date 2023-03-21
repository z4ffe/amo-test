import {Button, Flex, GridItem, Heading, SimpleGrid, Text, useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import contentList from '../data/contentList'
import backgroundMobile from '../assets/images/bg.png'

const Content: React.FC = (): JSX.Element => {
   const [isMobile] = useMediaQuery('(max-width: 320px)')

   return (
      <Flex
         w='100%'
         h={['445px', '510px']}
         direction={['column', 'row']}
         paddingX={['15px', '150px']}
         marginTop={['0', '80px']}
         justifyContent={['', 'space-between']}
         backgroundImage={[backgroundMobile, 'none']}>
         <Flex flexDir='column' marginTop={['40px', '0']}>
            <Heading fontWeight='400' fontSize={['36px', '48px']}>
               Зарабатывайте
               <br /> больше
            </Heading>
            <Heading
               fontWeight='900'
               fontSize={['36px', '48px']}
               background='linear-gradient(92deg, #FCB045 27.14%, #FF3F78 61.36%), #E4E5EA'
               backgroundClip='text'
               sx={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  'text-fill-color': 'transparent',
               }}>
               с WELBEX
            </Heading>
            <Text w='275px' fontWeight='400' fontSize='18px' lineHeight='22px' fontFamily='Montserrat' marginTop={['5px', '30px']}>
               Развиваем и контролируем продажи за вас
            </Text>
         </Flex>
         <Flex flexDir='column' alignItems={['start', 'end']} marginTop={['45px', '15px']}>
            <Heading fontWeight='700' fontSize='18px' w={['272px', '291px']} textAlign={['left', 'right']}>
               Вместе с{' '}
               <Text
                  as='span'
                  textTransform={['lowercase', 'uppercase']}
                  background='linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%)'
                  backgroundClip='text'>
                  бесплатной
               </Text>{' '}
               <Text
                  as='span'
                  textTransform={['lowercase', 'uppercase']}
                  background='linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%)'
                  backgroundClip='text'>
                  консультацией
               </Text>{' '}
               мы дарим:
            </Heading>
            {isMobile ? (
               <SimpleGrid columns={2} alignSelf='start' marginTop='12px' gap='10px 0'>
                  {contentList.map((el) => (
                     <GridItem display='flex' w='130px' key={el.id} alignItems='center' gap='5px'>
                        <Flex w='10px' h='1px' background='linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%)' />
                        <Text textAlign='right'>{el.mobile}</Text>
                     </GridItem>
                  ))}
               </SimpleGrid>
            ) : (
               <SimpleGrid columns={2} alignSelf='end' marginTop='40px' gap='28px 42px'>
                  {contentList.map((el) => (
                     <GridItem w='130px' key={el.id}>
                        <Heading fontWeight='500' fontSize='18px' textTransform='uppercase' textAlign='right'>
                           {el.header}
                        </Heading>
                        <Text textAlign='right' lineHeight='22px' marginTop='6px'>
                           {el.body}
                        </Text>
                     </GridItem>
                  ))}
               </SimpleGrid>
            )}
            {isMobile ? null : (
               <Button
                  w='262px'
                  h='61px'
                  marginTop='61px'
                  fontWeight='500'
                  fontSize='16px'
                  color='#E4E5EA'
                  backgroundColor='#4077F3'
                  borderRadius='0'
                  _hover={{backgroundColor: '#2257d0'}}
                  _active={{backgroundColor: '#1348c0'}}>
                  Получить консультацию
               </Button>
            )}
         </Flex>
      </Flex>
   )
}

export default Content
