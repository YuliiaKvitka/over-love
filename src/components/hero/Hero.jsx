import Image from 'next/image'
import ButtonYellow from '../buttonYellow/ButtonYellow'
import styles from './Hero.module.css'
import Play1x from './../../../public/assets/hero/play@1x.png'
import Play2x from './../../../public/assets/hero/play@2x.png'
import ReadIt1x from './../../../public/assets/hero/readit@1x.png'
import ReadIt2x from './../../../public/assets/hero/readit@2x.png'
import Apply1x from './../../../public/assets/hero/apply@1x.png'
import Apply2x from './../../../public/assets/hero/apply@2x.png'
import Multiply1x from './../../../public/assets/hero/multiply@1x.png'
import Multiply2x from './../../../public/assets/hero/multiply@2x.png'
import icon from './../../../public/assets/btn-icons/letsgo@1x.png'

const Hero = () => {
  return (
    <section className={styles.section}>
     <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <div className={styles.columnLeft}>
            <h1 className={styles.title}>Listen To The Beat Of The Web</h1>
            <p className={styles.bodyText}>First template from series templates to design web pages, using components system</p>
            <ButtonYellow title='Let’s Go' width={299} src={icon} />
          </div>
          <div className={styles.columnRight}>
            <Image src={Play1x} srcSet={Play2x} alt='' width={499} height={499}/>
          </div>
        </div>
        {/* ------------------------ */}
        <div className={styles.wrapperHow}>
          <h2 className={styles.titleHow}>How it works</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image className={styles.img} src={ReadIt1x} srcSet={ReadIt2x} alt='' width={76} height={88} />
              <h3>Read it</h3>
              <p>Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p></li>
            <li className={styles.item}>
              <Image className={styles.img}  src={Apply1x} srcSet={Apply2x} alt='' width={76} height={88} />
              <h3>Apply</h3>
              <p>Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore.</p></li>
            <li className={styles.item}>
               <Image className={styles.img}  src={Multiply1x} srcSet={Multiply2x} alt='' width={76} height={88} />
              <h3>Multiply</h3>
              <p>Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  orem.</p></li>
          </ul>
        </div>
     </div>
    </section>
  )
}

export default Hero
