import React from 'react';
import styles from './styles.css';

const Button = ({ label, onClickHandler }) => {
  return (
    <button 
      onClick={onClickHandler}
      className={styles.root}>
      { label }
    </button>
  )
}

export default Button;
