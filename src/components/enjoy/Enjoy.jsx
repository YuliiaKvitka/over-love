import Button from './../../components/button/Button'
import styles from './Enjoy.module.css'
import IconBlack1x from './../../../public/assets/btn/icon-black@1x.png'
import SliderCart from '../sliderCart/SliderCart'


const Enjoy = () => {
  return (
      <section className={styles.section} >
      <div className={styles.wrapper}>
        <div className={styles.slider}><SliderCart/></div>


              {/* <div className={styles.box}>
                  <h2 className={styles.title}>Enjoy this product</h2>
                  <p className={styles.text}>This project required a huge amount of hours but  sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.</p>
          {/* <Button color='rgb(44, 44, 44)' backgroundColor='rgb(255, 215, 3)'/> */}
           {/* <Button color='rgb(44, 44, 44)' backgroundColor='rgb(255, 215, 3)' borderColor='rgb(255, 215, 3)' src={IconBlack1x}  title='Sign Up'/>
          </div> */}
      </div> 
    </section>
  )
}

export default Enjoy
