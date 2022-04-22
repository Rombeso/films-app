import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'
import cn from 'classnames'
import { Rating } from '../Rating/Rating'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Button } from '../Button/Button'
import CloseIcon from './close.svg'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm } from './ReviewForm.interface'

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit } = useForm<IReviewForm>()

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cn(styles.reviewForm, className)}
                    {...props}
                >
                    <Input {...register('name')} placeholder='Имя' />
                    <Input {...register('title')} placeholder='Заголовок отзыва' className={styles.title} />
                    <div className={styles.rating}>
                        <span>Оценка:</span>
                        <Controller
                            control={control}
                            name='reting'
                            render={({ field }) => (
                                <Rating isEditable rating={field.value} setRating={field.onChange} />
                            )} />
                    </div>
                    <Textarea {...register('description')} placeholder='Текст отзыва' className={styles.submit} />
                    <div className={styles.description}>
                        <Button appearence='primary'>Отправить</Button>
                        <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                    </div>
                </div>
                <div className={styles.success}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>
                        Спасибо, ваш отзыв опубликован после проверки.
                    </div>
                    <CloseIcon className={styles.close} />
                </div>

            </form>
        </>
    )
}