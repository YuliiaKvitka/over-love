import Image from 'next/image'
import Link from 'next/link'
import styles from './TeamCardContact.module.css'
import imgIg from './../../../public/assets/team/ig@1x.png'
import imgTg from './../../../public/assets/team/tg@1x.png'
import imgIn from './../../../public/assets/team/in@1x.png'

const TeamCardContact = ({name, job, hrefIg, hrefTg, hrefIn}) => {
  return (
      <div className={styles.card}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.job}>{job}</h4>
          <div className={styles.social}>
              <Link href={hrefIg}><Image src={imgIg} alt=''/></Link>
              <Link href={hrefTg}><Image src={imgTg} alt=''/></Link>
              <Link href={hrefIn}><Image src={imgIn} alt=''/></Link>
          </div>
    </div>
  )
}

export default TeamCardContact
