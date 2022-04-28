import styles from './Product.module.css'
import { ProductProps } from './Product.props'
import cn from 'classnames'
import { Card } from '../Card/Card'
import { Rating } from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import { declOfNum, priceRu } from '../../helpers/helpers'
import { Devider } from '../Devider/Devider'
import Image from 'next/image'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { Review } from '../Review/Review'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import { motion } from 'framer-motion'

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isRevieOpened, setIsRevieOpened] = useState<boolean>(false)
    const reviewRef = useRef<HTMLDivElement>(null)
    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: {opacity: 0, height: 0}
    }
    const scrollToReview = () => {
        setIsRevieOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }
    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag color='green' className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>мес</span></div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}><a href='#ref' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Devider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Devider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearence='primary'>Узнать подробнее</Button>
                    <Button
                        appearence={'ghost'}
                        arrow={isRevieOpened ? 'down' : 'right'}
                        className={styles.reviewButton}
                        onClick={() => setIsRevieOpened(!isRevieOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card >
<motion.div animate={isRevieOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
         
            <Card color='blue' className={styles.reviwes} ref={reviewRef}>

                {product.reviews.map(r => (
                    <div key={r._id}>
                        <Review review={r} />
                        <Devider />
                    </div>
                ))}
                <ReviewForm productId={product._id} />
            </Card>
            </motion.div>
        </div>
    )
}))