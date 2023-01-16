import React from 'react';

import { Grid, Cell } from './Grid';

import placeholderImage from '../../public/placeholder.jpg';
import {Card}           from './Card';

export default {
  title: 'Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'Light gray' },
  },
  subcomponents: {
    Card
  },
  argTypes: {
    hasBackground: {
      name: "Cells have backgrounds?"
    },
  },
};

const Placeholder =  () => <img src={placeholderImage}  alt={"Placeholder"} style={{width: '100%', height: 'auto'}}/>;

export const grid = () => {
  return (
    <Grid>
      <Cell cols={8} xs={2} sm={2} md={2} lg={3} xl={3}><Placeholder /></Cell>
      <Cell xs={2} sm={2} md={2} lg={3} xl={3}><Placeholder /></Cell>
      <Cell sm={2} md={2} lg={3} xl={3}><Placeholder /></Cell>
      <Cell sm={3} md={3} lg={3} xl={3}><Placeholder /></Cell>
      <Cell sm={3} md={3} lg={4} xl={4}><Placeholder /></Cell>
      <Cell lg={4} xl={4}><Placeholder /></Cell>
      <Cell lg={4} xl={4}><Placeholder /></Cell>
      <Cell lg={6} xl={6}><Placeholder /></Cell>
      <Cell lg={6} xl={6}><Placeholder /></Cell>
      <Cell cols={5}><Placeholder /></Cell>
    </Grid>
  )
}
export const gridExample = () => {
  return (
    <Grid>
      <Cell xs={4} sm={4} md={4} lg={8}><Placeholder /></Cell>
      <Cell xs={2} sm={2} md={2} lg={4}><Placeholder /></Cell>
      <Cell xs={2} sm={2} md={2} lg={4}><Placeholder /></Cell>
      <Cell xs={2} sm={2} md={2} lg={4}><Placeholder /></Cell>
      <Cell xs={2} sm={2} md={2} lg={4}><Placeholder /></Cell>
      <Cell xs={2} sm={3} md={3} lg={6}><Placeholder /></Cell>
      <Cell xs={2} sm={3} md={3} lg={6}><Placeholder /></Cell>
    </Grid>
  )
}

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
<Grid {...args}>
  <Cell xs={2} sm={3} md={3} lg={6}><Card {...cardArgs} hasBackground={args.hasBackground} /></Cell>
  <Cell xs={2} sm={3} md={3} lg={6}><Card {...cardArgs} hasBackground={args.hasBackground} /></Cell>
</Grid>
);
TwoItems.args = {
  hasBackground: false
}

export const ThreeItems = (args) => (
<Grid {...args}>
  <Cell xs={2} lg={4}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={4}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={4}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
</Grid>
);
ThreeItems.args = {
  hasBackground: false
}

export const FourItems = (args) => (
<Grid {...args}>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
</Grid>
);
FourItems.args = {
  hasBackground: false
}

export const ManyItems = (args) => (
<Grid {...args}>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
  <Cell xs={2} lg={3}><Card {...cardArgs} hasBackground={args.hasBackground}  /></Cell>
</Grid>
);
ManyItems.args = {
  hasBackground: false
}