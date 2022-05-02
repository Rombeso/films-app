
import styles from './Buttonicon.module.css'
import cn from 'classnames'
import { ButtoniconProps, icons } from './Buttonicon.props'



export const Buttonicon = ({ appearence, icon, className, ...props }: ButtoniconProps): JSX.Element => {
	const IconComp = icons[icon]
    return (<button
		className={cn(styles.button, className, {
			[styles.primary]: appearence == 'primary',
			[styles.white]: appearence == 'white'
		})}
		{...props}
	>
	<IconComp />
	</button >
	)
}