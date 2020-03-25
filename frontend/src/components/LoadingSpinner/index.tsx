import React from 'react';
import styles from './styles.css';

const sizes = {
  small: '24px',
  medium: '48px',
  large: '64px',
}

type LoadingSpinnerPropsType = {
  size: 'small' | 'medium' | 'large'
}
const LoadingSpinner: React.SFC<LoadingSpinnerPropsType> = (props: LoadingSpinnerPropsType) => {
  const size = sizes[props.size];

  return (
    <svg 
      className={styles.spinner} 
      width={size}
      height={size}
      viewBox="0 0 66 66" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={styles.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
  );
}

LoadingSpinner.defaultProps = {
  size: 'medium',
}

export default LoadingSpinner;