import React from 'react';
import { NavContainer } from './NavigationBar.styled';
import { ReactComponent as HomeIcon } from '../../images/svg/homepage-icon.svg';
import { ReactComponent as StatisticIcon } from '../../images/svg/statisticpage-icon.svg';
import { ReactComponent as UsdIcon } from '../../images/svg/mobile-nav-usd.svg';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <NavContainer>
      <ul className="menu">
        <li>
          <NavLink className="navLink" to="/home">
            <HomeIcon className="navBtn" />
            <span className="navSign">{'Home'}</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="navLink" to="/statistics">
            <StatisticIcon className="navBtn" />
            <span className="navSign">{'Statistics'}</span>
          </NavLink>
        </li>

        <li className="currency">
          <NavLink className="navLink" to="/currency">
            <UsdIcon className="navBtn" />
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};
