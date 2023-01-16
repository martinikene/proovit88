import React, {useMemo} from 'react';
import classNames       from 'classnames/bind';

import styles from './grid.module.scss';
const cn = classNames.bind(styles);

export const Cell = ({xs , sm, md, lg, xl, children}) => {
  const generateColumnStyles = (tXs, tSm, tMd, tLg, tXl) => {
    tXs = tXs || 4;
    tSm = tSm || tXs;
    tMd = tMd || tSm;
    tLg = tLg || tMd;
    tXl = tXl || tLg;

    const newXs = tXs > 4 ? 4 : tXs;
    const newSm = tSm > 6 ? 6 : tSm;
    const newMd = tMd > 6 ? 6 : tMd;
    const newLg = tLg > 12 ? 12 : tLg;
    const newXl = tXl > 12 ? 12 : tXl;

    return cn(
      'cell',
      {
        [`col-xs-${newXs}`]: tXs,
        [`col-sm-${newSm}`]: tSm,
        [`col-md-${newMd}`]: tMd,
        [`col-lg-${newLg}`]: tLg,
        [`col-xl-${newXl}`]: tXl,
      }
    )
  }
  const columnStyles = useMemo(() => generateColumnStyles(xs, sm, md, lg, xl), [xs, sm, md, lg, xl] );
  return (
    <div className={columnStyles}>
      {children}
    </div>
  )
}

export const Grid = ({children}) => {
  return (
    <div className={styles.grid}>
        {children}
    </div>
  );
};
