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
	>{children}</p>

	// switch (fontSize) {
	// 	case 'small':
	// 		return <p className={styles.small}>{children}</p>
	// 	case 'large':
	// 		return <p className={styles.large}>{children}</p>
	// 	default:
	// 		return <p className={styles.medium}>{children}</p>
	// }
}