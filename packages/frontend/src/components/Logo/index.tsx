import React from 'react';
import cx from 'classnames';
import logo from 'images/image.svg';
import styles from './styles.css';

type LogoPropsType = {
  withTitle?: boolean,
  size?: string,
  customClassName?: string,
}
const Logo: React.SFC<LogoPropsType> = (props: LogoPropsType) => {
  const { withTitle, size, customClassName } = props;

  const logoClasses = cx(styles.root, customClassName);
  const imageClasses = cx(styles.image, styles[size])

  return (
    <div className={logoClasses}>
      <img 
        className={imageClasses} 
        alt="logo" 
        src={logo}
      />
      { withTitle && (
        <div className={styles.logoText}>
          MyNotes
        </div>
      )}
    </div>
  );
}

Logo.defaultProps = {
  withTitle: false,
  size: 'medium',
}

export default Logo;
