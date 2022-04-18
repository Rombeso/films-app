import styles from './Adventages.module.css'
import { AdventagesProps } from './Adventages.props'
import cn from 'classnames'
import CheckIcon from './check.svg'

export const Adventages = ({ adventages }: AdventagesProps) => {
    return (
        <>
            {adventages.map(a => (
                <div key={a._id} className={styles.adventage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.verticalLine} />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    )
}