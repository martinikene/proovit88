import React from 'react';

import { Grid } from './Grid';

import placeholderImage from '../../public/placeholder.jpg';

export default {
  title: 'Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  }
};

const Placeholder =  () => <img src={placeholderImage}  alt={"Placeholder"} style={{width: '100%', height: 'auto'}}/>;

export const grid = (args) => {
  console.log('args: ', args);
  const children = [];
  for( let n=0; n < args.children_count; n++) {
    children.push( <Placeholder />);
  }

  return (
    <Grid>
      {children}
    </Grid>
  )
}

grid.args = {
  children_count: 9
};