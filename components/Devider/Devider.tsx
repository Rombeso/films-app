import styles from './Devider.module.css'
import { DeviderProps } from './Devider.props'
import cn from 'classnames'

export const Devider = ({ className, ...props }: DeviderProps) => {
    return (
        <hr className={cn(className, styles.hr)} {...props} />
    )
}