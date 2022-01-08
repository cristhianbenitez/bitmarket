const sizes = {
  tablet: '425px',
  laptop: '768px',
  laptopL: '1024px',
  desktop: '1440px',
  desktopL: '2560px'
};

const devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktopL})`
};

export default devices;
