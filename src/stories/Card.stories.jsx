import React from 'react';

import { Card } from './Card';

import placeholderImage from '../../public/placeholder.jpg';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: { default: '#f5f7f6' },
  },
  argTypes: {
    hasBackground: {
      name: "Has background"
    },
  },
};

export const card = (args) => <Card
  {...args}
  featuredImage={placeholderImage}
  title={"Lorem ipsum dolor"}
  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."}
  price={106}
  currency={"€"}
  link={"#"}
/>
card.args = {
  hasBackground: true
}