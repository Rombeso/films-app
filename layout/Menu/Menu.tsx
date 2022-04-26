import styles from './Menu.module.css'
import cn from 'classnames'
import { AppContext } from '../../context/app.context'
import { useContext } from 'react'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.intarface'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '../../helpers/helpers'
import { motion } from 'framer-motion'

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)
    const router = useRouter()

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }

    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: { opacity: 0, height: 0 }
    }


    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened
            }
            return m
        }))
    }

    const buildFirstlevel = () => {

        return (
            <>
                {firstLevelMenu.map(m => (

                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a >
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        <div>

                        </div>

                        {m.id == firstCategory && buildSecondlevel(m)}
                    </div>
                ))}
            </>
        )
    }
    const buildSecondlevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (
                        <div key={m._id.secondCategory} >
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]: m.isOpened
                                })}
                            >
                                {buildThirdlevel(m.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    )
                })
                }
            </div >
        )
    }
    const buildThirdlevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <motion.div key={p._id} variants={variantsChildren}>
                    <Link href={`/${route}/${p.alias}`} >
                        <a className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                        })}>
                            {p.category}
                        </a>
                    </Link>
                </motion.div>
            ))
        )
    }

    return (
        <div className={styles.menu}>
            {buildFirstlevel()}
        </div>
    )
}