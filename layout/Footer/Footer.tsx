import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'
import cn from 'classnames'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer {...props} className={cn(className, styles.footer)}>
			<span className={styles.rights}>OwlTop © 2021 - {format(new Date, 'yyyy')} Все права защищены</span>
			<a href='#' target="_blank" className={styles.agreement}>Пользовательское соглашение</a>
			<a href='#' target="_blank" className={styles.privacy}>Политика конфиденциальности</a>
		</footer>
	)
}