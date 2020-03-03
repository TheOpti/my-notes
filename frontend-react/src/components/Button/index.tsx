import React from 'react';
import styles from './styles.css';

type ButtonPropsType = {
  label: string;
  onClickHandler: Function;
}
const Button: React.SFC<ButtonPropsType> = ({ label, onClickHandler }: ButtonPropsType) => {
  return (
    <button 
      onClick={onClickHandler}
      className={styles.root}
    >
      { label }
    </button>
  )
}

export default Button;
