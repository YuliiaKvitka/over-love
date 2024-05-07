import Image from 'next/image'
import Form from '../form/Form'
import styles from './Prefooter.module.css'
import icon11x from './../../../public/assets/social/Behance@1x.png'
import icon12x from './../../../public/assets/social/Behance@2x.png'
import icon21x from './../../../public/assets/social/Dribbble@1x.png'
import icon22x from './../../../public/assets/social/Dribbble@2x.png'
import icon31x from './../../../public/assets/social/Instagram@1x.png'
import icon32x from './../../../public/assets/social/Instagram@2x.png'
import IconBlack1x from './../../../public/assets/btn/icon-black@1x.png'

const Prefooter = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <div className={styles.content}>
                  <h2 className={styles.title}>Download the future</h2>
                  <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.</p>
          <div className={styles.form}>
            <Form backgroundColor='rgb(255, 215, 3)' color='rgb(44, 44, 44)' src={IconBlack1x}/>
          </div>
          <div className={styles.social}>
            <Image src={icon11x} srcSet={icon12x} alt=''/>
            <Image src={icon21x} srcSet={icon22x} alt=''/>
            <Image src={icon31x} srcSet={icon32x} alt=''/>
          </div>
              </div>
              </div>
      
    </section>
  )
}

export default Prefooter
