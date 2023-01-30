import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arrFromObj } from '../../../utils/arrFromObj';
import { Form } from '../../base/Form';
import { FormData } from '../../base/FormData';
import strings from './lang.json';
import { deleteError, setError, setOrder } from '../../../store/slices/orderSlice';
import { thousandSeparator } from '../../../utils/thousandSeparator';
import { NextPageButton } from '../../buttons/styleButtons/NextPageButton';
import { validateDataOrder, checkData } from '../../../utils/validateData';
import { isError } from '../../../utils/isError';
import { orderSelector } from '../../../selectors/orderSelector';
import { errorSelector } from '../../../selectors/errorSelector';

export function PriceForm() {
  const formData = arrFromObj(strings);
  const orderData = useSelector(orderSelector);
  const errorData = useSelector(errorSelector);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError(errorData)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [errorData]);

  function handleChange(e, info) {
    const order = checkData(e);
    const [error, errorObj] = validateDataOrder(
      order,
      info,
      orderData.numberOfAdults,
      orderData.numberOfChildren,
    );
    dispatch(setOrder({ info, order }));
    if (error) {
      dispatch(setError({ error, errorObj: errorObj || info }));
      if (errorObj) {
        dispatch(deleteError(info));
      }
    } else {
      if (errorData[info]) {
        dispatch(deleteError(info));
      }
      if (errorData[errorObj]) {
        dispatch(deleteError(errorObj));
      }
    }
  }

  const sum = useMemo(() => thousandSeparator(orderData.sum), [orderData.sum])

  return (
    <div className='full'>
      <Form title="Бронирование номера" secTitle="Расчет стоимости">
        {formData.map((el) => (
          <FormData
            value={orderData[el.info]}
            key={el.info}
            name={el.info}
            text={el.text}
            typeOfInput={el.type}
            inputText={el.inputText}
            error={errorData[el.info]}
            onChange={handleChange}
          />
        ))}
        <div className="form__data__card">
          <div>Итого:</div>
          <div className="input__container bold">
            {sum}
            {' '}
            ₽
          </div>
        </div>
        <div className="form__button__container">
          <NextPageButton text="Далее" page="customerForm" disabled={disabled} />
        </div>
      </Form>
    </div>
  );
}
