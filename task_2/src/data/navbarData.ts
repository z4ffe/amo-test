interface INavbarData {
   id: number
   name: string
   path: string
   mobile: boolean
}

const navbarData: INavbarData[] = [
   {
      id: 1,
      name: 'Услуги',
      path: '/',
      mobile: true,
   },
   {
      id: 2,
      name: 'Виджеты',
      path: '/',
      mobile: true,
   },
   {
      id: 3,
      name: 'Интеграции',
      path: '/',
      mobile: true,
   },
   {
      id: 4,
      name: 'Кейсы',
      path: '/',
      mobile: true,
   },
   {
      id: 5,
      name: 'Сертификаты',
      path: '/',
      mobile: false,
   },
]

export default navbarData
