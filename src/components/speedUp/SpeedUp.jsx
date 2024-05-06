import Image from 'next/image'
import styles from './SpeedUp.module.css'
import Icon11x from './../../../public/assets/speedUp/icon1@1x.png'
import Icon12x from './../../../public/assets/speedUp/icon1@2x.png'
import Icon21x from './../../../public/assets/speedUp/icon2@1x.png'
import Icon22x from './../../../public/assets/speedUp/icon2@2x.png'
import Icon31x from './../../../public/assets/speedUp/icon3@1x.png'
import Icon32x from './../../../public/assets/speedUp/icon3@2x.png'
import Icon41x from './../../../public/assets/speedUp/icon4@1x.png'
import Icon42x from './../../../public/assets/speedUp/icon4@2x.png'
import Icon51x from './../../../public/assets/speedUp/icon5@1x.png'
import Icon52x from './../../../public/assets/speedUp/icon5@2x.png'
import Icon61x from './../../../public/assets/speedUp/icon6@1x.png'
import Icon62x from './../../../public/assets/speedUp/icon6@2x.png'
import Card from '../card/Card'

const SpeedUp = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Speed up your design process</h2>
                    <ul className={styles.list}>
                    <li >
                        <Card  color=' rgb(255, 216, 78)' src={Icon11x} srcSet={Icon12x} title='Auto Layout' text='Sed do eiusmod tempor incididunt ut consectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore'/>
                    </li>
                    
                    <li className={styles.item}>
                        <Card  color='rgb(251, 99, 99)' src={Icon21x} srcSet={Icon22x} title='Variants' text='Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna '/>
                    </li>

                    <li className={styles.item}>
                        <Card  color='rgb(166, 109, 245)' src={Icon31x} srcSet={Icon32x} title='Components' text='Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod'/>
                    </li>
                    
                    <li>
                        <Card  color='rgb(109, 214, 176)' src={Icon41x} srcSet={Icon42x} title='Components' text='Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod'/>
                    </li>
                    
                    <li>
                        <Card  color='rgb(112, 140, 240)' src={Icon51x} srcSet={Icon52x} title='Components' text='Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod'/>
                    </li>
                    
                    <li>
                        <Card  color='rgb(160, 46, 142)' src={Icon61x} srcSet={Icon62x} title='Components' text='Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod'/>
                        </li>
                    </ul>
            </div>
        </section>
    )
}

export default SpeedUp
