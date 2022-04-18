import styles from './Paragraph.module.css'
import { ParagraphProps } from './Paragraph.props'
import cn from 'classnames'

export const Paragraph = ({ fontSize = 'medium', children, className, ...props }: ParagraphProps) => {
    return <p
        className={cn(styles.paragraph, className, {
            [styles.small]: fontSize == 'small',
            [styles.medium]: fontSize == 'medium',
            [styles.large]: fontSize == 'large',
        })}
        {...props}
    >{children}
    </p>
}