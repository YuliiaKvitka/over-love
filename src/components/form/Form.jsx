'use client'

import Button from '../button/Button'
import styles from './Form.module.css'
import IconBlack1x from './../../../public/assets/btn/icon-black@1x.png'
import Input from './input/Input'

const Form = ({backgroundColor, color, src}) => {
  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        
      
          <Input title='Input text placeholder' width={312} height={50} />
        <Button className={styles.btn} color={color} backgroundColor={backgroundColor} borderColor='rgb(255, 215, 3)' src={src}  title='Sign Up'/>
      {/* <Input title='Телефон' width={293} height={45} /> */}

          {/* <input className={styles.input} type='text'/>
          <input className={styles.input} type='text' /> */}
          {/* <Button width={264} height={45}/> */}
      </div>
    </form>

  )
}

export default Form

// 'rgb(255, 215, 3)'
// 'rgb(44, 44, 44)'
// IconBlack1x