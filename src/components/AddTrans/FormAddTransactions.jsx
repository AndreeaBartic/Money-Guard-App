import { Formik, Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { object, string, number } from 'yup';
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

const addSchema = object({
  amount: number().positive().required('Amount is required'),
  comment: string()
    .max(30, 'Maximum must be 30 characters')
    .required('Please fill in comment'),
  categoryId: string().min(3),
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
      } catch (error) {
        return error.message;
      }
    };

    if (categories.length === 0) {
      getCategories();
    }

    localStorage.setItem('categories', JSON.stringify(categories));
  });
  console.log(categories);
  const optionCategories = categories.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });
  console.log(categories);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const adjustedValues = {
      ...values,
      amount:
        values.type === 'EXPENSE'
          ? -Math.abs(values.amount)
          : Math.abs(values.amount),
    };
    dispatch(addTransaction(adjustedValues));
    resetForm();
  };

  return (
    <>
      <AddTitle>Add transaction</AddTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
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
                      console.log('Selected category:', option);
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
