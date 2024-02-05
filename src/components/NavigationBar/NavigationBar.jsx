import React from 'react';
import styles from './NavigationBar.module.css';
import { ReactComponent as HomeIcon } from '../../images/svg/homepage-icon.svg';
import { ReactComponent as StatisticIcon } from '../../images/svg/statisticpage-icon.svg';
import { ReactComponent as UsdIcon } from '../../images/svg/mobile-nav-usd.svg';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <NavLink className={`${styles.navLink} ${styles.currency}`} to="home">
            <HomeIcon className={styles.navBtn} />
            <span className={styles.navSign}>{'Home'}</span>
          </NavLink>
        </li>

        <li>
          <NavLink className={styles.navLink} to="statistics">
            <StatisticIcon className={styles.navBtn} />
            <span className={styles.navSign}>{'Statistics'}</span>
          </NavLink>
        </li>

        <li className={styles.currency}>
          <NavLink className={styles.navLink} to="currency">
            <UsdIcon className={styles.navBtn} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
