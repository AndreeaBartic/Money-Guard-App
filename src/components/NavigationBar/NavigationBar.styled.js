import styled from 'styled-components';
//import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  padding: 12px 0;
  .menu {
    list-style: none;
    margin: 0;
    flex-direction: row;
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }
  .currency {
    display: block;
  }
  .navLink {
    text-decoration: none;
    gap: 0px;
    align-items: center;
    width: 50px;
    .navBtn {
      width: 44px;
      height: 44px;
      border-radius: 8px;
    }
    .navSign {
      display: none;
    }
    &.active {
      .navBtn {
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 1) 50%,
          rgba(56, 63, 142, 0.1) 30%
        );
      }
      .navBtn path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  }
  .navBtn path:hover {
    fill-opacity: 1;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0 28px 0;

    .menu {
      list-style: none;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .currency {
      display: none;
    }
    .navLink {
      text-decoration: none;
      display: flex;
      gap: 20px;
      align-items: center;
      width: 150px;
      .navBtn {
        border-radius: 4px;
        width: 24px;
        height: 24px;
      }
      .navSign {
        display: inline;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: var(--main-font-color);
      }
      &.active {
        .navSign {
          font-weight: 700;
          color: var(--main-font-color);
        }
        .navBtn {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 50%,
            rgba(56, 63, 142, 0.1) 30%
          );
        }
        .navBtn path {
          fill: #4a56e2;
          fill-opacity: 1;
        }
      }
    }
    .navLink:hover .navSign {
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 0 28px 16px;
    .menu {
      list-style: none;
      width: 100%;
      flex-direction: column;
      gap: 12px;
      margin-left: 16px;
    }

    .currency {
      display: none;
    }
    .navLink {
      text-decoration: none;
      display: flex;
      gap: 20px;
      align-items: center;
      width: 150px;

      .navBtn {
        border-radius: 4px;
        width: 24px;
        height: 24px;
      }
      .navSign {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        color: var(--main-font-color);
      }

      &.active {
        .navSign {
          font-weight: 700;
          color: var(--main-font-color);
        }

        .navBtn {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 50%,
            rgba(56, 63, 142, 0.1) 30%
          );
        } 
      }
    }

    .navLink:hover .navSign {
      font-weight: 700;
    }
  }
`;
