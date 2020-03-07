import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

type ButtonPropsType = {
  label: string;
  onClickHandler?: (event: any) => void;
  color?: 'raised' | 'outlined';
  classname?: string,
}
const Button: React.SFC<ButtonPropsType> = (props: ButtonPropsType) => {
  const { label, onClickHandler, color, classname } = props;

  const btnClasses = cx(styles.root, styles[color], classname);

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
  color: 'raised',
  classname: '',
};

export default Button;
