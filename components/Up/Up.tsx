import styles from './Up.module.css'
import cn from 'classnames'
import UpIcon from './up.svg'
import { useScrollY } from '../../hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Buttonicon } from '../Buttonicon/Buttonicon'

export const Up = (): JSX.Element => {
const controls = useAnimation()
const y = useScrollY();

useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight * 2})
}, [y, controls])


   const scrollTop = () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       })
   }

    return (
        <motion.div 
        className={styles.up} 
        animate={controls}
        initial={{opacity: 0}}

        >
<Buttonicon appearence='primary' icon='up' onClick={scrollTop}/>
        </motion.div>
    )
}