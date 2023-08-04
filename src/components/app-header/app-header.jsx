import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.li}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">
              Конструктор
            </p>
          </li>
          <li className={styles.li}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </li>
        </ul>
        <Logo />
        <ul className={styles.list}>
          <li className={styles.li}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
