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

export const Graph = styled.div`
  position: relative;
  background: rgba(74, 86, 226, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export const Ball = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 55px;
    left: 46px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;

export const BallEur = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 20px;
    right: 94px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;

export const Wrap = styled.div`
  background: rgba(74, 86, 226, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 320px;
  margin-top: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    margin-top: 0px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
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
