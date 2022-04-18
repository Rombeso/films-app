import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.props'
import cn from 'classnames'

export const Textarea = ({ className, ...props }: TextareaProps) => {
    return (
        <textarea className={cn(className, styles.textaria)} {...props} />
    )
}