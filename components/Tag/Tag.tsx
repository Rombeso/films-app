import styles from './Tag.module.css'
import { TagProps } from './Tag.props'
import cn from 'classnames'

export const Tag = ({ size = 'small', children, className, color = 'ghost', href, ...props }: TagProps) => {
	return <div
		className={cn(styles.tag, className, {
			[styles.small]: size == 'small',
			[styles.medium]: size == 'medium',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.grey]: color == 'grey',
			[styles.primary]: color == 'primary',
			[styles.green]: color == 'green',
		})}

		{...props}
	>
		{
			href
				? <a href={href}>{children} </a>
				: <>{children} </>
		}
	</div>
}