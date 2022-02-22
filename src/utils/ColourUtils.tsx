export const Color_Violet_Dark = '#7F3DFF';
export const Color_Violet_Semi_Light = '#8F57FF';
export const Color_Violet_Light = '#B18AFF';
export const Color_Violet_Ultra_Light = '#EEE5FF';

export const Color_Red_Dark = '#FD3C4A';
export const Color_Red_Semi_Light = '#FD5662';
export const Color_Red_Light = '#FDA2A9';
export const Color_Red_Ultra_Light = '#FDD5D7';

export const Color_Green_Dark = '#00A86B';
export const Color_Green_Semi_Light = '#2AB784';
export const Color_Green_Light = '#65D1AA';
export const Color_Green_Ultra_Light = '#CFFAEA';

export const Color_Yellow_Dark = '#FCAC12';
export const Color_Yellow_Semi_Light = '#FCBB3C';
export const Color_Yellow_Light = '#FCCC6F';
export const Color_Yellow_Ultra_Light = '#FCEED4';

export const Color_Blue_Dark = '#0077FF';
export const Color_Blue_Semi_Light = '#248AFF';
export const Color_Blue_Light = '#57A5FF';
export const Color_Blue_Ultra_Light = '#BDDCFF';

export const ultraLightColorForDarkColor = (color: string) => {
  switch (color) {
    case Color_Violet_Dark: {
      return Color_Violet_Ultra_Light;
    }
    case Color_Red_Dark: {
      return Color_Red_Ultra_Light;
    }
    case Color_Green_Dark: {
      return Color_Green_Ultra_Light;
    }
    case Color_Yellow_Dark: {
      return Color_Yellow_Ultra_Light;
    }
    case Color_Blue_Dark: {
      return Color_Blue_Ultra_Light;
    }
    default:{
      return 'white';
    }
  }
};
