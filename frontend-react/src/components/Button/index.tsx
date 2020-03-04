import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

type ButtonPropsType = {
  label: string;
  onClickHandler?: (event: any) => void;
  classname?: string,
}
const Button: React.SFC<ButtonPropsType> = (props: ButtonPropsType) => {
  const { label, onClickHandler, classname } = props;

  const btnClasses = cx(styles.root, classname);

  return (
    <button 
      onClick={onClickHandler}
      className={btnClasses}
    >
      { label }
    </button>
  )
}

Button.defaultProps = {
  label: '',
  classname: '',
};

export default Button;
