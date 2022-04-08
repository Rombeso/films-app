import { Button, Htag, Paragraph, Tag } from '../components'


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearence={'primary'}>Кнопка</Button>
      <Button appearence={'ghost'} arrow='right'>Кнопка</Button>
      <Paragraph>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
      <Paragraph fontSize='large'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
      <Tag size='small' >Тег ghost </Tag>
      <Tag size='medium' color='red' >Тег red </Tag>
      <Tag size='medium' color='green' >Тег green </Tag>
      <Tag size='small' color='primary' >Тег primary </Tag>
    </>
  )
}
