import CoursesIcon from './icons/courses.svg'
import ServisesIcon from './icons/servises.svg'
import ProductsIcon from './icons/products.svg'
import BooksIcon from './icons/books.svg'
import { TopLevelCategory } from '../interfaces/page.intarface'
import { FirstLevelMenuItem } from '../interfaces/menu.intarface'

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Corses },
    { route: 'servises', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevelCategory.Services },
    { route: 'products', name: 'Книги', icon: <ProductsIcon />, id: TopLevelCategory.Books },
    { route: 'books', name: 'Продукты', icon: <BooksIcon />, id: TopLevelCategory.Products }
]