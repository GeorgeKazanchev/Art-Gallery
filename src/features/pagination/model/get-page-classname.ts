import * as styles from '../ui/pagination.module.scss';
import { ELLIPSIS } from '../config/consts';

const getPageClassname = (page: number | string, checkedPage: number, isLightTheme: boolean) => {
  let className = styles.page;
  if (page === checkedPage) {
    className += ` ${styles.pageChecked} ${isLightTheme ? styles.pageCheckedLight : ''}`;
  } else if (page !== ELLIPSIS) {
    className += ` ${styles.pageUnchecked} ${isLightTheme ? styles.pageUncheckedLight : ''}`;
  }
  return className;
};

export default getPageClassname;
