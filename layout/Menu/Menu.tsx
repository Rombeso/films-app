import styles from './Menu.module.css'
import cn from 'classnames'
import { AppContext } from '../../context/app.context'
import { useContext } from 'react'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.intarface'
import CoursesIcon from './icons/courses.svg'
import ServisesIcon from './icons/servises.svg'
import ProductsIcon from './icons/products.svg'
import BooksIcon from './icons/books.svg'
import { TopLevelCategory } from '../../interfaces/page.intarface'


const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Corses },
	{ route: 'servises', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevelCategory.Services },
	{ route: 'products', name: 'Книги', icon: <ProductsIcon />, id: TopLevelCategory.Books },
	{ route: 'books', name: 'Продукты', icon: <BooksIcon />, id: TopLevelCategory.Products }
]

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext)

	const buildFirstlevel = () => {

		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id === firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondlevel(m)}
					</div>
				))}
			</>
		)
	}
	const buildSecondlevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory} >
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdlevel(m.pages, menuItem.route)}
						</div>
					</div>
				))
				}
			</div >
		)
	}
	const buildThirdlevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		)
	}

	return (
		<div className={styles.menu}>
			{buildFirstlevel()}
		</div>
	)
}