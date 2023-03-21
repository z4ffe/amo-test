import {Flex, Heading, Image, Link, ListItem, UnorderedList, Text} from '@chakra-ui/react'
import React from 'react'
import telegram from '../assets/images/telegram.svg'
import viber from '../assets/images/viber.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Footer: React.FC = (): JSX.Element => {
   return (
      <Flex w='100%' h={['615px', '315px']} paddingX={['15px', '150px']} flexDir={['column', 'row']}>
         <Flex flexDir='column' w={['320px', 'auto']} marginTop={['40px', '0']}>
            <Heading fontWeight='700' fontSize='14px' color='#656566'>
               О КОМПАНИИ
            </Heading>
            <UnorderedList display='flex' flexDir='column' listStyleType='none' margin={['15px 0 0', '20px 0 0']} color='#E4E5EA' gap={['5px', '10px']}>
               <ListItem>
                  <a href='#'>Партнёрская программа</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Вакансии</a>
               </ListItem>
            </UnorderedList>
         </Flex>
         <Flex flexDir='column' margin={['22px 0', '0 0 0 98px']}>
            <Heading fontWeight='700' fontSize='14px' color='#656566'>
               МЕНЮ
            </Heading>
            <UnorderedList
               h={['150px', '160px']}
               display='flex'
               flexDir='column'
               flexWrap='wrap'
               listStyleType='none'
               color='#E4E5EA'
               margin='20px 0 0'
               fontSize={['14px', '16px']}
               lineHeight={['15px', 'auto']}
               gap={['12px 20px', '15px 50px']}>
               <ListItem w={['123px', 'auto']}>
                  <a href='#'>Расчёт стоимости</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Услуги</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Виджеты</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Интеграции</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Наши клиенты</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Кейсы</a>
               </ListItem>
               <ListItem w={['133px', 'auto']}>
                  <a href='#'>Благодарственные письма</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Сертификаты</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Блог на Youtube</a>
               </ListItem>
               <ListItem>
                  <a href='#'>Вопрос / Ответ</a>
               </ListItem>
            </UnorderedList>
         </Flex>
         <Flex flexDir='column' marginLeft={['0', 'auto']} alignItems={['start', 'end']}>
            <Heading fontWeight='700' fontSize='14px' color='#656566' textAlign={['left', 'right']}>
               КОНТАКТЫ
            </Heading>
            <Flex marginLeft={['0', 'auto']} marginTop='20px'>
               <Link href='callto:+75555555555'>+7 555 555-55-55</Link>
            </Flex>
            <Flex marginTop={['10px', '21px']}>
               <UnorderedList display='flex' gap='10px' listStyleType='none' margin='0'>
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
            <Text fontSize='16px' marginTop={['5px', '15px']}>
               Москва, Путевой проезд 3с1, к 902
            </Text>
            <Text fontSize='12px' marginTop={['50px', '65px']}>
               ©WELBEX 2022. Все права защищены.
            </Text>
            <Text fontSize='12px' textDecoration='underline' marginBottom={['60px', '0']}>
               Политика конфиденциальности
            </Text>
         </Flex>
      </Flex>
   )
}

export default Footer
