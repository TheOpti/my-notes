import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

const sizes = {
  small: '24px',
  medium: '48px',
  large: '64px',
}

type LoadingSpinnerPropsType = {
  size: 'small' | 'medium' | 'large',
  monocolor?: boolean,
}
const LoadingSpinner: React.SFC<LoadingSpinnerPropsType> = (props: LoadingSpinnerPropsType) => {
  const { size, monocolor } = props;

  const spinnerSize = sizes[size];

  const circleClasses = cx({
    [styles.colors]: !monocolor,
    [styles.monocolor]: monocolor,
  }, [styles.path])

  return (
    <svg 
      className={styles.spinner} 
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 66 66" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        className={circleClasses} 
        fill="none" 
        strokeWidth="6" 
        strokeLinecap="round"
         cx="33" cy="33" r="30"
      />
    </svg>
  );
}

LoadingSpinner.defaultProps = {
  size: 'medium',
  monocolor: false,
}

export default LoadingSpinner;