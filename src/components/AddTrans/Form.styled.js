import styled from 'styled-components';
import { Form, Field } from 'formik';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

export const AddTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #fbfbfb;

  @media screen and (min-width: 768px) {
    margin-bottom: 41px;
    font-size: 30px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`;
export const CancelBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
`;
export const StyledLabel = styled.label`
  margin-bottom: 40px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Select {
    width: 100%;
    margin-bottom: 42px;
  }

  .custom-input {
    box-sizing: border-box;
    display: inherit;
    width: 181px;
    background-color: transparent;
    border: none;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    padding-bottom: 8px;
    padding-top: 5px;
    padding-left: 21px;
  }

  .react-datepicker-wrapper {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .react-datepicker__input-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
  }

  .date-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    fill: #734aef;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const StyledSum = styled(Field)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;
  padding-bottom: 8px;
  padding-top: 5px;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    padding-left: 21px;

    &::placeholder {
      text-align: left;
    }
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 18px;
  width: 100%;

  .Select__control {
    background-color: transparent;
    height: 35px;
    width: 100%;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control:hover {
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__control--is-focused {
    border: 0;
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: rgba(255, 255, 255, 0.1);
    width: auto;
  }

  .Select__menu {
    background: linear-gradient(
      0deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    color: rgba(251, 251, 251, 1);
    font-size: 16px;
    border-radius: 8px;
    max-height: 352px;
  }

  .Select__menu-list {
    height: 100%;
  }

  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  .Select__option--is-selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 134, 141, 1);
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }

  @media screen and (max-width: 767px) {
    .Select__value-container {
      padding-left: 21px;
    }

    .Select__menu-list {
      max-height: 352px;
    }
  }
`;

export const StyledComment = styled(Field)`
  display: inherit;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 5px 5px 8px 10px;

  &::placeholder {
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    padding-left: 21px;
    padding-bottom: 52px;
  }
`;

export const SwitcherWrapper = styled.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`;

export const Label = styled.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`;

export const FormStyles = styled.form`
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 40px 72px;
    background: var(--background-modal);
    box-shadow: var(--modal-box-shadow);
    border-radius: 8px;
  }
`;

export const HeaderText = styled.h3`
  color: var(--white);
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: 1.5;
  font-weight: 400;
  line-height: 36px;

  margin-bottom: 32px;
`;

export const WrapperChanges = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  margin-bottom: 60px;
  color: var(--transparency-60, rgba(255, 255, 255, 0.6));
  font-size: 16px;
  line-height: 1.5;

  &:focus {
    color: var(--dashboard-text, #ff868d);
  }
`;

export const ChangesActiveTypeIncome = styled.span`
  color: ${({ $activetype }) => $activetype === 'INCOME' && '#FFB627'};
`;
export const ChangesActiveTypeExpense = styled.span`
  color: ${({ $activetype }) => $activetype === 'EXPENSE' && '#FF868D'};
`;

export const WrapperCategories = styled.div`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  outline: none;

  select {
    background-color: transparent;
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    border: none;
    outline: none;
  }

  border-bottom: 1px solid var(--transparency-60);
`;

export const WrapperInputEditor = styled.div`
  border-bottom: 1px solid var(--transparency-60);
`;

export const InputEditor = styled.input`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 20px;

  background-color: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--white, #fbfbfb);
  }
`;

export const WrapperTablet = styled.div`
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const WrapperComment = styled.div`
  border-bottom: 1px solid var(--transparency-60);
  margin-bottom: 40px;

  textarea {
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    resize: none;
    overflow-y: hidden;
    transition: height 0.2s;
    background-color: transparent;
    border: none;
    color: var(--white);
    padding-left: 20px;
    height: 24px;
    &::placeholder {
      color: var(--white, #fbfbfb);
    }
  }

  textarea:focus {
    outline: none;
  }

  textarea {
    height: 52px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SaveButton = styled.button`
  width: 300px;
  padding-block: 13px;
  font-weight: 400;
  @media screen and (max-width: 767.9px) {
    width: 280px;
  }
  color: var(--white, #fbfbfb);
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: var(--btn-gradient-color);

  margin-bottom: 20px;

  &:hover,
  &:focus {
    background: transparent;
    color: #ffc727;
    outline: 1px solid #ffc727;
  }
`;

export const CancelButton = styled.button`
  width: 300px;
  padding-block: 13px;
  font-weight: 400;
  @media screen and (max-width: 767.9px) {
    width: 280px;
  }
  color: (--text-button, #623f8b);
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: var(--white, #fbfbfb);

  &:hover,
  &:focus {
    background: transparent;
    color: #ffc727;
    outline: 1px solid #ffc727;
  }
`;
export const ErrorText = styled.p`
  color: red;
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    color: #fbfbfb;
    position: relative;
  }

  :hover,
  :focus {
    outline: none;
    border: none;
  }
  @media (max-width: 767px) {
    & svg {
      display: none;
    }
  }
`;
