import Theme from '../types/theme';

export const isThemeLight = (theme: Theme): boolean => {
  return theme === Theme.Light;
};
