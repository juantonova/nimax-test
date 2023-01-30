import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arrFromObj } from '../../../utils/arrFromObj';
import { Form } from '../../base/Form';
import { FormData } from '../../base/FormData';
import strings from './lang.json';
import { deleteError, setCustomer, setError } from '../../../store/slices/orderSlice';
import { PrevPageButton } from '../../buttons/styleButtons/PrevPageButton';
import { NextPageButton } from '../../buttons/styleButtons/NextPageButton';
import { checkPhone, isCurrentCustomerData, validateDataCustomer } from '../../../utils/validateData';
import { currentErrorSelector } from '../../../selectors/currentErrorSelector';
import { customerSelector } from '../../../selectors/customerSelector';

export function CustomerForm() {
  const formData = arrFromObj(strings);
  const customerData = useSelector(customerSelector);
  const errorData = useSelector(currentErrorSelector);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCurrentCustomerData(customerData)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [customerData]);

  function handleChange(e, info) {
    const customer = (info === 'phonenumber')
      ? checkPhone(e.target.value)
      : e.target.value;
    const error = validateDataCustomer(customer, info);
    dispatch(setCustomer({ info: e.target.name, customerData: customer }));
    if (error) {
      dispatch(setError({ error, errorObj: info }));
    } else {
      dispatch(deleteError(info));
    }
  }

  return (
      <div className='full' data-page="customer">
      <Form title="Бронирование номера" secTitle="Данные покупателя" onChange={handleChange}>
        {formData.map((el) => (
          <FormData
            value={customerData[el.info]}
            key={el.info}
            name={el.info}
            text={el.text}
            typeOfInput={el.type}
            inputText={el.inputText}
            error={errorData[el.info]}
            onChange={handleChange}
          />
        ))}
        <div className="form__button__container">
          <PrevPageButton text="Назад к расчету стоимости" page="priceForm" />
          <NextPageButton text="Далее" page="totalForm" disabled={disabled} />
        </div>
      </Form>
    </div>
  );
}
