import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.props'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div className={cn(styles.wrapper, className,)}>
            <textarea className={cn(styles.textaria, {
                [styles.error]: error
            })} ref={ref} {...props} />
            {error && <span className={styles.errorMassage}>{error.message}</span>}
        </div>
    )
})