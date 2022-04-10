import { useState } from 'react'
import { Button, Htag, Paragraph, Rating, Tag } from '../components'
import { Layout, withLayout } from '../layout/Layout'

function Home(): JSX.Element {

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
    </>
  )
}

export default withLayout(Home)