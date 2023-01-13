import React from 'react';

import placeholderImage from '../../public/placeholder.jpg';

import { Cards } from './Cards';
import { Card } from './Card';

export default {
  title: 'Cards',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'Light gray' },
  },
  subcomponents: {
    Card
  },
  argTypes: {
    hasBackground: {
      name: "Cells have backgrounds"
    },
  },
};

const cardArgs = {
  hasBackground: false,
  featuredImage: placeholderImage,
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur.",
  price: 106,
  currency: "€",
  link: "#"
};

export const TwoItems = (args) => (
  <Cards {...args}>
    <Card {...cardArgs} hasBackground={args.hasBackground} />
    <Card {...cardArgs} hasBackground={args.hasBackground} />
  </Cards>
);
TwoItems.args = {
  hasBackground: false
}

export const ThreeItems = (args) => (
  <Cards {...args}>
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground} />
  </Cards>
);
ThreeItems.args = {
  hasBackground: false
}

export const FourItems = (args) => (
  <Cards {...args}>
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
  </Cards>
);
FourItems.args = {
  hasBackground: false
}

export const ManyItems = (args) => (
  <Cards {...args}>
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
    <Card {...cardArgs} hasBackground={args.hasBackground}  />
  </Cards>
);
ManyItems.args = {
  hasBackground: false
}