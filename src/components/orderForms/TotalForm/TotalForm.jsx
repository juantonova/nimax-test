import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Form } from '../../base/Form';

import {
  transformCountOfPeople, transformInsurance, transformName, transformPhone, transformRoomInfo,
} from '../../../utils/totalTransformators';
import { thousandSeparator } from '../../../utils/thousandSeparator';
import { PrevPageButton } from '../../buttons/styleButtons/PrevPageButton';
import { PayButton } from '../../buttons/styleButtons/PayButton';
import { orderSelector } from '../../../selectors/orderSelector';
import { customerSelector } from '../../../selectors/customerSelector';

export function TotalForm() {
  const orderData = useSelector(orderSelector);
  const customerData = useSelector(customerSelector);

  const name = useMemo(() => transformName(customerData), [
    customerData.name, customerData.surname, customerData.middleName]);
  const phone = useMemo(() => transformPhone(customerData), [customerData.phonenumber]);
  const roomInfo = useMemo(() => transformRoomInfo(orderData), [
    orderData.numberOfNights, orderData.typeOfRoom,
  ]);
  const countOfPeople = useMemo(() => transformCountOfPeople(orderData), [
    orderData.numberOfAdults, orderData.numberOfTeenagers, orderData.numberOfChildren,
  ]);
  const insurance = useMemo(() => transformInsurance(orderData), [orderData.insurance]);

  const sum = useMemo(() => thousandSeparator(orderData.sum), [orderData.sum])

  return (
    <div className='full' data-page="total">
      <Form title="Бронирование номера" secTitle="Подтверждение заказа">
        <div className="form__total">
          <div className="bold">{name}</div>
          <div>{phone}</div>
          <div>{roomInfo}</div>
          <div>{countOfPeople}</div>
          <div>{insurance}</div>
          <div>
            К оплате &nbsp;
            <span className="bold">
              {sum}
              {' '}
              ₽
            </span>

          </div>
        </div>
        <div className="form__button__container">
          <PrevPageButton text="Назад к данным покупателя" page="customerForm" />
          <PayButton text="Оплатить" page="finalForm" />
        </div>
      </Form>
    </div>
  );
}
