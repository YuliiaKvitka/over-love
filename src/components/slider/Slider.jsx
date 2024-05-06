'use client'
import React, { useRef, useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideWidth = 344 + 20; // Ширина слайда плюс отступ

  // Начало касания или мыши
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].pageX : e.pageX); // Поддержка мыши и касания
  };

  // Перемещение касания или мыши
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].pageX : e.pageX;
    const distance = currentX - startX;

    // Обновляем позицию скролла в зависимости от движения
    sliderRef.current.scrollLeft -= distance;
    setStartX(currentX); // Обновляем позицию для следующего шага
  };

  // Конец касания или мыши
  const handleTouchEnd = () => {
    setIsDragging(false);

    // Определяем индекс текущего слайда
    const currentScroll = sliderRef.current.scrollLeft;
    const newSlideIndex = Math.round(currentScroll / slideWidth);

    // Устанавливаем скролл на ближайший слайд
    sliderRef.current.scrollLeft = newSlideIndex * slideWidth;

    // Обновляем текущее положение
    setCurrentSlide(newSlideIndex);
  };

  return (
    <div>
      <div
        className={styles.sliderContainer}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart} // Поддержка для мыши
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        <div className={styles.slider}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <img src={slide.src} srcSet={slide.sercSet} alt={slide.title} className={styles.slideImage} />
              {/* <div>{slide.title}</div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scrollBar}>
        {/* Индикатор полосы прокрутки */}
        <div
          className={styles.scrollIndicator}
          style={{
            width: `${100 / slides.length}%`, // Ширина индикатора
            left: `${(currentSlide * 100) / slides.length}%`, // Позиция индикатора
          }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;





