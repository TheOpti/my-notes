import React from 'react';
import cx from 'classnames';
import Icon from 'components/Icon';
import styles from './styles.css';

type IconButtonPropsType = {
  iconName: string;
  customClassName?: string;
  onClick: Function;
}
const IconButton: React.SFC<IconButtonPropsType> = (props: IconButtonPropsType) => {
  const { iconName, customClassName } = props;

  const iconButtonClasses = cx(styles.root, customClassName);

  return (
    <div className={iconButtonClasses}>
      <Icon
        name={iconName}
        customClassName={styles.icon}
      />
    </div>
  );
}

IconButton.defaultProps = {
  iconName: '',
  onClick: () => {}
}

export default IconButton;