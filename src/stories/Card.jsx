import React from 'react';
import classNames from 'classnames/bind';

import styles from './card.module.scss';

const cn = classNames.bind(styles);

export const Card = ({hasBackground, featuredImage, title, description, price, currency, link}) => {
  return (
    <div className={cn('card', {'card--with_background': hasBackground})}>
      <img className={cn('card__featured-image')} src={featuredImage} alt={title} />
      <div className={cn('card__title')}>{title}</div>
      <p className={cn('card__description')}>{description}</p>
      <div className={cn('card__price')}>
        <span className={cn('card__price__label')}>Room starting at</span>
        <div className={cn('card__price__amount')}>{price} <span className={cn('card__price__currency')}>{currency}</span></div>
      </div>
      <a href={link} className={cn('card__link')}>Find out more →</a>
    </div>
  );
};
