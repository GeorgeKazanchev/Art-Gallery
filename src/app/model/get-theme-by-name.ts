import Theme from '../../shared/types/theme';

const getThemeByName = (themeName: string): Theme => {
  switch (themeName) {
    case 'Dark':
      return Theme.Dark;
    case 'Light':
      return Theme.Light;
    default:
      return Theme.Dark; //  Set the default theme if an incorrect theme is passed
  }
};

export default getThemeByName;
