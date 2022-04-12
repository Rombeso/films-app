import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Button, Htag, Paragraph, Rating, Tag } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.intarface'

function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag='h1'>sds</Htag>
      <Button appearence={'primary'}>Кнопка</Button>
      <Button appearence={'ghost'} arrow='right'>Кнопка</Button>
      <Paragraph>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
      <Paragraph fontSize='large'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
      <Tag size='small' >Тег ghost </Tag>
      <Tag size='medium' color='red' >Тег red </Tag>
      <Tag size='medium' color='green' >Тег green </Tag>
      <Tag size='small' color='primary' >Тег primary </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>

      </ul>
      {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}