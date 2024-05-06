'use client'
import styles from './SlideCart.module.css'
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import IconBlack1x from './../../../public/assets/btn/icon-black@1x.png'
import Image from 'next/image';
import Right from './../../../public/assets/btn/right.png'
import Left from './../../../public/assets/btn/left.png'
import slideData from './../../../public/data/SliderData.js'; // Импорт данных слайдов
// # Установите необходимые зависимости, если используете styled-components
// npm install styled-components


const SliderCart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const totalSlides = slideData.length; // Используем количество слайдов из данных

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

 const goToNext = () => {
  setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0)); // Завершенный тернарный оператор
};

  return (
    <div className={styles.sliderContainer}>
     {slideData.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{ '--offset': index - currentSlide }}
        >
          <div className={styles.slideContent}>
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.text}>{slide.text}</p>
          </div>
        </div>
      ))}

          <div className={styles.wrapper}>
              <Button className={styles.btn} color='rgb(44, 44, 44)' backgroundColor='rgb(255, 215, 3)' borderColor='rgb(255, 215, 3)' src={IconBlack1x}  title='Sign Up'/>
           <div className={styles.arrowButtons}>
            <button
              className={styles.arrowButton}
              onClick={goToPrevious}
            >
              <Image src={Left} alt=''/>
            </button>
    
            <button
              className={styles.arrowButton}
              onClick={goToNext}
            >
              <Image src={Right}   alt=''/>
            </button>
              </div>
              
          <div className={styles.pagination}>
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentSlide ? styles.active : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
     </div>
    </div>
  );
};

export default SliderCart;

// // Контейнер слайдера
// const SliderContainer = styled.div`
//   position: relative;
//   width: 824px;
//   height: 318px;
//   overflow: hidden;
//   background-color: #f0f0f0; // Цвет фона для слайдера
// `;

// // Стили для отдельного слайда
// const Slide = styled.div`
//   position: absolute;
//   top: 0;
//   left: ${(props) => props.offset * 100}%;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.5s ease;
//   border-radius: 16px; // Закругленные углы
//   backdrop-filter: blur(24px); // Размытие фона
//   background: rgba(255, 255, 255, 0.8); // Прозрачный белый фон
// `;

// // Содержимое слайда
// const SlideContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: #333;
// `;

// const Text = styled.p`
//   font-size: 16px;
//   color: #666;
// `;

// const ArrowButton = styled.button`
//   position: absolute;
//   bottom: 10px;
//   right: ${(props) => (props.left ? '50px' : '10px')}; // Левая стрелка отступает на 50px, правая на 10px
//   padding: 10px;
//   background: #333;
//   color: #fff;
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
// `;

// const Pagination = styled.div`
//   position: absolute;
//   bottom: 10px;
//   left: 10px;
//   display: flex;
//   gap: 10px;
// `;

// const PaginationDot = styled.div`
//   width: 10px;
//   height: 10px;
//   background: ${(props) => (props.active ? '#333' : '#ccc')};
//   border-radius: 50%;
//   cursor: pointer;
// `;

// const SliderCart = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 5; // Количество слайдов

//   const goToPrevious = () => {
//     setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
//   };

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
//   };

//   return (
//     <SliderContainer>
//       {[...Array(totalSlides)].map((_, index) => (
//         <Slide key={index} offset={index - currentSlide}>
//           <SlideContent>
//             <Title>{`Slide ${index + 1}`}</Title>
//             <Text>This is the content of slide {index + 1}.</Text>
//           </SlideContent>
//         </Slide>
//       ))}

//       <ArrowButton left onClick={goToPrevious}>←</ArrowButton>
//       <ArrowButton onClick={goToNext}>→</ArrowButton>

//       <Pagination>
//         {[...Array(totalSlides)].map((_, index) => (
//           <PaginationDot
//             key={index}
//             active={index === currentSlide}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//               <Button color='rgb(44, 44, 44)' backgroundColor='rgb(255, 215, 3)' borderColor='rgb(255, 215, 3)' src={IconBlack1x}  title='Sign Up'/>
//       </Pagination>
//     </SliderContainer>
//   );
// };

// export default SliderCart;
