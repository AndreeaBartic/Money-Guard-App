import { Formik, Field } from 'formik';
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
} from './Edit.styled';
import { CancelBtn } from '../AddTrans/Form.styled';
import { forwardRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { CustomSelect } from '../AddTrans/SelectCategory.js';
import { CustomSwitch } from '../CustomSwitch/CustomSwitch.js';
import { RiCalendar2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {
  editItem,
  fetchTransactions,
} from '../../Redux/transactions/transactionsOperations';
import { toast } from 'react-toastify';

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

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));

export default function EditTransaction({ transactionData, onClose }) {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState(() => {
    return JSON.parse(window.localStorage.getItem('categories')) ?? [];
  });

  const initialValues = {
    type: transactionData.type,
    categoryId: transactionData.categoryId,
    amount: transactionData.amount,
    transactionDate: transactionData.transactionDate,
    comment: transactionData.comment,
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`/api/transaction-categories`);
      setCategories(response.data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const optionCategories = categories.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  return (
    <>
      <AddTitle>Edit transaction</AddTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={transactionSchema}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            id: transactionData.id,
            values,
          };
          console.log(payload);
          try {
            dispatch(editItem(payload));
            dispatch(fetchTransactions());
            toast.success('Transaction updated successfully!');
            onClose();
          } catch (error) {
            console.error('Failed to update the transaction', error);
          }
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, validate, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <SwitcherWrapper>
              <CustomSwitch
                checked={values.type === 'EXPENSE'}
                onChange={isChecked => {
                  setFieldValue('type', isChecked ? 'EXPENSE' : 'INCOME');
                }}
              />
            </SwitcherWrapper>
            {values.type === 'EXPENSE' && (
              <>
                <CustomSelect
                  options={optionCategories}
                  value={values.categoryId}
                  onChange={value => setFieldValue('categoryId', value)}
                  className="Select"
                  name="categoryId"
                />
                <ErrorMessageStyled name="categoryId" component="div" />
              </>
            )}
            <Wrapper>
              <Label>
                <StyledSum type="number" name="amount" />
                <ErrorMessageStyled name="value" component="div" />
              </Label>
              <Label>
                <Field name="transactionDate" validate={validate}>
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
              <StyledComment type="textarea" name="comment" />
              <ErrorMessageStyled name="comment" component="div" />
            </StyledLabel>

            <AddBtn type="submit">Save</AddBtn>
            <CancelBtn name="cancel" type="button" onClick={onClose}>
              Cancel
            </CancelBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
