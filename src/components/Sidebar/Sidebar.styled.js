import styled from 'styled-components';
import currency_desk from '../../images/CurrencyChartImages/currency_desk.png';
import currency_desk_2x from '../../images/CurrencyChartImages/currency_desk@2x.png';
import currency_table from '../../images/CurrencyChartImages/currency_tablet.png';
import currency_table_2x from '../../images/CurrencyChartImages/currency_tablet@2x.png';
import currency_mobile from '../../images/CurrencyChartImages/currency_mobile.png';
import currency_mobile_2x from '../../images/CurrencyChartImages/currency_mobile.png';

import line_desc_1x from '../../images/CurrencyChartImages/nline_desc_1x.png';
import line_desc_2x from '../../images/CurrencyChartImages/nline_desc_2x.png';
import line_desc_tab_1x from '../../images/CurrencyChartImages/nline_desc_tab_1x.png';
import line_desc_tab_2x from '../../images/CurrencyChartImages/nline_desc_tab_2x.png';
import line_desc_mob_1x from '../../images/CurrencyChartImages/nline_desc_mob_1x.png';
import line_desc_mob_2x from '../../images/CurrencyChartImages/nline_desc_mob_2x.png';

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 214px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
    align-items: unset;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export const MainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 481px;
  }
`;

export const UpperContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 32px 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    padding-bottom: 32px;
    width: 480px;
    height: 246px;
    margin: 0;
  }
`;

export const DownContainer = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--select-background-color);
  }

  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    height: 214px;
    background-color: var(--select-background-color);
    border-radius: 0 0 8px 8px;
  }

  @media screen and (min-width: 1280px) {
    display: block !important;
    width: 480px;
    height: 360px;
    background-color: var(--select-background-color);
  }
`;

export const Graphics = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .currency-value {
    display: none;
  }
  @media screen and (min-width: 320px) {
    margin: 0 auto;
    margin-top: 20px;
    width: 320px;
    height: 88px;
    border-radius: 0;
    background-image: url(${currency_mobile});
    @media (min-device-pixel-ratio: 2) {
      background-image: url(${currency_mobile_2x});
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;
    width: 336px;
    height: 80px;
    border-radius: 8px;
    background-image: url(${currency_table});
    @media (min-device-pixel-ratio: 2) {
      background-image: url(${currency_table_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 61px;
    width: 480px;
    height: 167px;
    border-radius: 0;
    background-image: url(${currency_desk});
    .currency-value {
      display: inline-block;
      position: absolute;
      font-size: 12px;
      line-height: 18px;
      color: var(--dashboard-text);
    }
    span:first-child {
      top: -13px;
      left: 46px;
    }
    span:last-child {
      right: 96px;
      top: -45px;
    }

    @media (min-device-pixel-ratio: 2) {
      background-image: url(${currency_desk_2x});
    }
  }
`;

export const Line = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 320px) {
    position: relative;
    margin: 0 auto;
    background-image: url(${line_desc_mob_1x});
    width: 320px;
    height: 74px;
    top: -110px;
    @media (min-device-pixel-ratio: 2) {
      background-image: url(${line_desc_mob_2x});
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${line_desc_tab_1x});
    width: 336px;
    height: 74px;
    top: -100px;
    @media (min-device-pixel-ratio: 2) {
      background-image: url(${line_desc_tab_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    background-image: url(${line_desc_1x});
    width: 480px;
    height: 106px;
    top: -190px;
    @media (min-device-pixel-ratio: 2) {
      background-image: url(${line_desc_2x});
    }
  }
`;
