import React from 'react';
import cx from 'classnames';

import LoadingSpinner from '../LoadingSpinner';

import styles from './styles.css';

type ButtonPropsType = {
  label: string;
  onClickHandler?: (event: any) => void;
  color?: 'raised' | 'outlined';
  classname?: string,
  disabled?: boolean,
  loading?: boolean,
}
const Button: React.SFC<ButtonPropsType> = (props: ButtonPropsType) => {
  const { label, onClickHandler, color, classname, disabled, loading } = props;

  const btnClasses = cx(styles.root, styles[color], classname, {
    [styles.disabled]: disabled || loading,
  });

  const labelStyles = {
    ...(loading ? { paddingLeft: '8px' }: null),
  };

  return (
    <button 
      onClick={onClickHandler}
      className={btnClasses}
      type="button"
    >
      <span className={styles.content}>
        { loading && <LoadingSpinner size="small" monocolor />}
        <span style={labelStyles}>
          { label }
        </span>
      </span>
    </button>
  );
}

Button.defaultProps = {
  label: '',
  color: 'raised',
  classname: '',
};

export default Button;
