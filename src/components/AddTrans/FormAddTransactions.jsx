import { Formik, Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { object, string, number, date } from 'yup';
import {
  AddBtn,
  AddTitle,
  StyledForm,
  SwitcherWrapper,
  Wrapper,
  StyledLabel,
  StyledSum,
  StyledComment,
  Label,
  ErrorMessageStyled,
  CancelBtn,
} from './Form.styled';
import { useDispatch } from 'react-redux';
import { CustomSwitch } from 'components/CustomSwitch/CustomSwitch';
import { addTransaction } from '../../Redux/transactions/transactionsOperations';
import { RiCalendar2Fill } from 'react-icons/ri';
import { CustomSelect } from './SelectCategory';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState, useEffect } from 'react';
import axios from 'axios';

const transactionSchema = object({
  type: string()
    .required('Type is required')
    .oneOf(['EXPENSE', 'INCOME'], 'Amount must be either INCOME or EXPENSE'),
  amount: number()
    .required('Amount is required')
    .test(
      'amount-sign',
      'Amount must be positive for INCOME and negative for EXPENSE',
      function (value) {
        const { type } = this.parent;
        return (
          (type === 'INCOME' && value >= 0) || (type === 'EXPENSE' && value < 0)
        );
      }
    ),
  transactionDate: date()
    .required('Transaction date is required')
    .max(new Date(), 'Transaction date cannot be in the future'),
  comment: string().required('Comment is required'),
  categoryId: string(),
});

const initialValues = {
  type: 'EXPENSE',
  categoryId: '',
  amount: 0,
  transactionDate: new Date(),
  comment: '',
};

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));

function FormAddTransaction({ onClose }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(
    () => JSON.parse(window.localStorage.getItem('categories')) ?? []
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`/api/transaction-categories`);
        setCategories(response.data);
        localStorage.setItem('categories', JSON.stringify(response.data));
        console.log(response.data);
        return response.data;
      } catch (error) {
        return error.message;
      }
    };

    if (categories.length === 0) {
      getCategories();
    }
  });

  const optionCategories = categories.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  const handleSubmit = async (values, { resetForm }) => {
    const defaultIncomeCategoryId = '063f1132-ba5d-42b4-951d-44011ca46262';
    const payload = {
      ...values,
      categoryId:
        values.type === 'INCOME' ? defaultIncomeCategoryId : values.categoryId,
    };
    await dispatch(addTransaction(payload));
    onClose();
    resetForm();
  };

  return (
    <>
      <AddTitle>Add transaction</AddTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={transactionSchema}
        onSubmit={handleSubmit}
      >
        {formikProps => {
          const { values, setFieldValue } = formikProps;

          const handleTypeChange = isChecked => {
            const newType = isChecked ? 'EXPENSE' : 'INCOME';

            setFieldValue('type', newType);

            if (newType !== 'EXPENSE') {
              setFieldValue('categoryId', '');
            }
          };

          return (
            <StyledForm autoComplete="off">
              <SwitcherWrapper>
                <CustomSwitch
                  checked={values.type === 'EXPENSE'}
                  onChange={isChecked => handleTypeChange(isChecked)}
                />
              </SwitcherWrapper>
              {values.type === 'EXPENSE' && (
                <>
                  <CustomSelect
                    options={optionCategories}
                    value={values.categoryId}
                    onChange={option => {
                      setFieldValue('categoryId', option);
                    }}
                    className="Select"
                    name="category"
                  />
                  <ErrorMessageStyled name="categoryId" component="div" />
                </>
              )}
              <Wrapper>
                <Label>
                  <StyledSum type="number" name="amount" placeholder="0.00" />
                  <ErrorMessageStyled name="amount" component="div" />
                </Label>
                <Label>
                  <Field name="transactionDate">
                    {() => (
                      <DatePicker
                        name="transactionDate"
                        dateFormat="dd.MM.yyyy"
                        maxDate={new Date()}
                        selected={values.transactionDate || null}
                        onChange={transactionDate =>
                          setFieldValue('transactionDate', transactionDate)
                        }
                        shouldCloseOnSelect={true}
                        customInput={<CustomInput />}
                      />
                    )}
                  </Field>
                </Label>
              </Wrapper>
              <StyledLabel>
                <StyledComment
                  type="textarea"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessageStyled name="comment" component="div" />
              </StyledLabel>
              <AddBtn type="submit">Add</AddBtn>
              <CancelBtn name="cancel" type="button" onClick={onClose}>
                Cancel
              </CancelBtn>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
}
export default FormAddTransaction;
