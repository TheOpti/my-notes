import React from 'react';
import Icon from 'components/Icon';
import styles from './styles.css';

type IconButtonPropsType = {
  iconName: string;
  onClick: Function,
}
const IconButton: React.SFC<IconButtonPropsType> = (props: IconButtonPropsType) => {
  const { iconName } = props;

  return (
    <div className={styles.root}>
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