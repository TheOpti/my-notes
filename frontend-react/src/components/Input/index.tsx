import React, { useState } from 'react';
import styles from './styles.css';

type InputPropsType = {
  label: string;
  name: string;
  handleChange?: (event: any, value: string) => void;
  value?: string;
  error?: string;
  formSubmitted?: boolean;
}
const Input: React.SFC<InputPropsType> = (props: InputPropsType) => {
  const { 
    label, name, handleChange,
    value, error, formSubmitted
  } = props;

  const [visited, setVisited] = useState(false);

  const updateFormValue = (event) => {
    const { value } = event.target;
    handleChange(name, value);
  };

  const onBlurHandler = () => {
    setVisited(true);
  };

  const canShowError = visited || formSubmitted;
  
  return (
    <div className={styles.root}>
      <input 
        className={styles.input}
        onChange={updateFormValue}
        onBlur={onBlurHandler}
        value={value}
        required
      />
      <div className={styles.highlight} />
      <label className={styles.label} >
        { label }
      </label>
      <div className={styles.errorMsg}>
        { canShowError && error } 
      </div>
    </div>
  );
}

Input.defaultProps = {
  value: '',
  error: '',
  formSubmitted: false,
}

export default Input;
