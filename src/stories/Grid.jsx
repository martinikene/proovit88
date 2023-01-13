import React from 'react';

import styles from './grid.module.scss';

export const Grid = ({children}) => {
  return (
    <div className={styles.grid}>
        {React.Children.map(children, child => (<div className={styles.cell}>{child}</div>))}
    </div>
  );
};
