interface IContentList {
   id: number
   header: string
   body: string
   mobile: string
}

const contentList: IContentList[] = [
   {
      id: 1,
      header: 'Виджеты',
      body: '30 готовых решений',
      mobile: 'Skype аудит',
   },
   {
      id: 2,
      header: 'Dashboard',
      body: 'с показателями вашего бизнеса',
      mobile: '30 виджетов',
   },
   {
      id: 3,
      header: 'Skype Аудит',
      body: 'отдела продаж и CRM системы',
      mobile: 'Dashboard',
   },
   {
      id: 4,
      header: '35 дней',
      body: 'использования CRM',
      mobile: 'Месяц аmoCRM',
   },
]

export default contentList
