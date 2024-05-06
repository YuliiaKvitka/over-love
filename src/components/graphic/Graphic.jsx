import Slider from '../slider/Slider'
import styles from './Graphic.module.css'
import { slides } from '/public/data/slides.js'; // Импортируем slides

const Graphic = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <h2 className={styles.title}> Unsplash graphic </h2>
              <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.</p>
                  <Slider slides={slides} /> {/* Передаем слайды в компонент */}
          </div>
      
    </section>
  )
}

export default Graphic
