const customViewports = {
  xs: {
    name: 'Extra small',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  sm: {
    name: 'Small',
    styles: {
      width: '600px',
      height: '450px',
    },
  },
  md: {
    name: 'Medium',
    styles: {
      width: '800px',
      height: '600px',
    },
  },
  lg: {
    name: 'Large',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  xl: {
    name: 'Extra large',
    styles: {
      width: '1288px',
      height: '1058px',
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'Light',
        value: '#f8f8f8'
      },
      {
        name: 'Dark',
        value: '#333333'
      },
      {
        name: 'Light gray',
        value: '#f5f7f6'
      }
    ]
  }
};