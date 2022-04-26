import styles from './TopPageComponent.module.css'
import { Adventages, HhData, Htag, Paragraph, Product, Sort, Tag } from '../../components'
import { TopPageСomponentProps } from './TopPageComponent.props'
import { TopLevelCategory } from '../../interfaces/page.intarface'
import { SortEnum } from '../../components/Sort/Sort.props'
import { useEffect, useReducer } from 'react'
import { sortReducer } from './sort.reducer'
import { type } from 'os'
import { useScrollY } from '../../hooks/useScrollY'

export const TopPageComponent = ({ page, products, firstCategory }: TopPageСomponentProps): JSX.Element => {

    const [{ products: sortProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating })
    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort })
    }

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products })
    }, [products])
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='medium'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortProducts && sortProducts.map(p => (<Product layout key={p._id} product={p} />))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='medium'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Corses && page.hh && < HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Приемущества</Htag>
                <Adventages adventages={page.advantages} />
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color={'primary'}>{t}</Tag>)}
        </div >
    )
}