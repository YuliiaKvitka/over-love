import Image from 'next/image'
import styles  from './Card.module.css'

const Card = ({src, srcSet, title, text, color}) => {
  return (
    <div className={styles.item}>
      <Image src={src} srcSet={srcSet} alt='' width={116} height={116} />
                        <div className={styles.text}>
              <h3 style={{color:`${color}`}} className={styles.itemTitle}> {title}</h3>
              <p className={styles.itemText}>{text}</p>
          </div>
          </div>
  )
}

export default Card
