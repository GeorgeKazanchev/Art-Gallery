import Theme from '../../../shared/types/theme';

export const isThemeLight = (theme: Theme): boolean => {
  return theme === Theme.Light;
};
