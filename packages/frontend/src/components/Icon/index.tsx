import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

type IconPropsType = {
  name: string;
  size?: string;
  customClassName?: string;
}
const Icon: React.SFC<IconPropsType> = (props: IconPropsType) => {
  const { name, size, customClassName } = props;

  const iconClasses = cx(
    styles.root, 
    styles[size], 
    styles[name],
    customClassName
  );

  return (
    <i className={iconClasses} />
  );
}

Icon.defaultProps = {
  size: 'medium',
  customClassName: '',
}

export default Icon;