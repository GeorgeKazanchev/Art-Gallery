import Theme from '../types/theme';

export default function isThemeLight(theme: Theme): boolean {
  return theme === Theme.Light;
}
