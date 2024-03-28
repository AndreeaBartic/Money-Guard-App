import styled from 'styled-components';

export const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 288px;
  width: 288px;
  padding: 0px;
  flex: 1 1;
  align-self: start;
  justify-self: start;
  @media (max-width: 1279px) {
    min-height: 336px;
    min-width: 336px;
  }
  @media (max-width: 767px) {
    padding-bottom: 32px;
    min-height: 240px;
    max-height: 440px;
    height: 100%;
    min-width: 240px;
    max-width: 440px;
    width: 100%;
  }
  canvas {
    width: 100% !important;
    height: 100% !important;
    width: 288px;
    height: 288px;
    @media (max-width: 1279px) {
      min-height: 336px;
      min-width: 336px;
    }
    @media (max-width: 768px) {
      min-height: 240px;
      max-height: 440px;
      height: 100%;
      min-width: 240px;
      max-width: 440px;
      width: 100%;
    }
  }
`;
export const Total = styled.div`
  color: var(--white, #fbfbfb);

  font-style: normal;
  line-height: normal;
  position: absolute;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 600;
    top: 46%;
    left: 50%;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    font-weight: 700;
    top: 50%;
    left: 50%;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    top: 50%;
    left: 50%;
  }
`;
export const TextInfo = styled.p`
  text-align: center;
  font-weight: 600;
  color: var(--white);
`;
