import React from 'react';
import classNames from 'classnames/bind';

import styles from './cards.module.scss';

const cn = classNames.bind(styles);

export const Cards = props => {
  const children = React.Children.toArray( props.children );
  return (
    <div className={cn('container')}>
      {children.map(child => (<div className={cn('cell', {
        'cell--duo': children.length === 2,
        'cell--trio': children.length === 3,
      })}>{child}</div>))}
    </div>
  );
};
