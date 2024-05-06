'use client'
import Image from 'next/image';
import styles from './Button.module.css';
import styled from 'styled-components'; //npm install styled-components

// Компонент стилизованной кнопки с псевдоэлементом ::after
const StyledButton = styled.button`
 position: relative;
    box-sizing: border-box;
    /* Project Main/Accent */
    border: 2px solid ${(props) => props.backgroundColor};
    border-radius: 100px;
    width: 166px;
    height: 48px;
   color: ${(props) => props.color};
   background-color: ${(props) => props.backgroundColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    text-transform: uppercase;
    padding: 12px 40px 12px 40px;


  &:hover {
    background-color: white!important;
  }
   img {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 20px;
    top: 12px;
  }
`;


const Button = ({backgroundColor, borderColor, src, title, color }) => {
  return (

    <StyledButton  type="button" style={{ color:`${color}`, backgroundColor: `${backgroundColor}`, borderColor: `${borderColor}`, width: '166px', height: '48px', borderRadius: '100px' }} >{title} {src && <Image src={src} alt="" />}</StyledButton>
  
)
};

export default Button;
