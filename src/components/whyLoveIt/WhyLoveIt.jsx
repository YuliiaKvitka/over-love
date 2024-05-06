import Image from 'next/image'
import styles from './WhyLoveIt.module.css'
import Sean1x from './../../../public/assets/whyloveit/Sean@1x.png'
import Sean2x from './../../../public/assets/whyloveit/Sean@2x.png'
import Nick1x from './../../../public/assets/whyloveit/Nick@1x.png'
import Nick2x from './../../../public/assets/whyloveit/Nick@2x.png'
import Mishel1x from './../../../public/assets/whyloveit/Mishel@1x.png'
import Mishel2x from './../../../public/assets/whyloveit/Mishel@2x.png'

const WhyLoveIt = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <h2 className={styles.title}>Why you'll love it</h2>
              <ul className={styles.list}>
                  <li className={styles.item}>
                      <div className={styles.blockName}>
                          <Image src={Sean1x} srcSet={Sean2x} alt='' width={67} height={67} />
                          <div>
                              <h3>Sean Farmer</h3> 
                              <h4>CEO</h4>
                          </div>
                      </div>
                     <p> Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam lorem ipsum dolor.</p>
                </li>
                  <li className={styles.item}>
                      <div className={styles.blockName}>
                          <Image src={Nick1x} srcSet={Nick2x} alt='' width={67} height={67} />
                          <div>
                              <h3>Nick Parker</h3> 
                              <h4>Wed-designer</h4>
                          </div>
                      </div>
                     <p> Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore. Orem ipsum.</p>
                </li>
                  <li className={styles.item}>
                      <div className={styles.blockName}>
                          <Image src={Mishel1x} srcSet={Mishel2x} alt='' width={67} height={67} />
                          <div>
                              <h3>Mishel Latuale</h3> 
                              <h4>Project Manager</h4>
                          </div>
                      </div>
                     <p> Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Ipsum dolor sit amet.</p>
                </li>
              </ul>
          </div>
      
    </section>
  )
}

export default WhyLoveIt

