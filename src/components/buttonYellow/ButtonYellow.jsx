import Image from 'next/image'
import styles from './ButtonYellow.module.css'

const ButtonYellow = ({width, title, src}) => {
  return (
    <button style={{width:`${width}px`}} className={styles.btn} type="button">
   {title} <Image src={src} alt=''/>
    </button>
  )
}

export default ButtonYellow
