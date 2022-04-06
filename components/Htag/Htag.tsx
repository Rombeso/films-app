import { HtagProps } from './Htags.props'
import styles from './Htag.module.css'

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h3':
			return <h3 className={styles.h3}>{children}</h3>
	}
	return (<>
		{tag == 'h1' && <h1 className={styles.h1}>{children}</h1>}
		{tag == 'h2' && <h2 className={styles.h2}>{children}</h2>}
	</>
	)
}