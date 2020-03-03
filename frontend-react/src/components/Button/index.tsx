import React from 'react';
import styles from './styles.css';

type ButtonPropsType = {
  label: string;
  onClickHandler?: (event: any) => void;
}
const Button: React.SFC<ButtonPropsType> = (props: ButtonPropsType) => {
  const { label, onClickHandler } = props;

  return (
    <button 
      onClick={onClickHandler}
      className={styles.root}
    >
      { label }
    </button>
  )
}

Button.defaultProps = {
  label: '',
};

export default Button;
