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

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% + 16px);
  margin-left: -16px;
  color: #fbfbfb;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);
  overflow: clip;

  @media only screen and (max-width: 1279px) {
    margin-top: 70px;
    width: 336px;
  }

  @media only screen and (max-width: 769px) {
    width: 336px;
    border-radius: 0px 0px 8px 8px;
    background: rgba(74, 86, 226, 0.1);
  }

  @media only screen and (max-width: 425px) {
    width: 320px;
    margin-top: 0;
    margin-left: -20px;
  }
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-radius: 0px, 0px, 8px, 8px;
  color: var(--white);
  background: rgba(74, 86, 226, 0.1);

  @media screen and (min-width: 1280px) {
    width: 480px;
    border-radius: 0;
  }

  th,
  td {
    text-align: center;
    line-height: 1.5;
  }

  th {
    font-weight: 600;
    line-height: 1.5;
    padding: 12px;

    @media screen and (min-width: 1280px) {
      padding: 16px;
    }
  }

  thead th:nth-child(1) {
    width: 33%;
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 62px;
    }
  }

  thead th:nth-child(2) {
    width: 34%;
  }

  thead th:nth-child(3) {
    width: 33%;
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }

  td {
    padding: 8px 8px 4px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
    }

    @media screen and (min-width: 1280px) {
      padding: 24px 8px 0px;
    }
  }

  tbody td:nth-child(1) {
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 84px;
    }
  }

  tbody td:nth-child(3) {
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }
  tbody tr:nth-child(2) {
    td {
      padding-bottom: 0px;
    }
  }

  thead {
    background: rgba(255, 255, 255, 0.2);
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
