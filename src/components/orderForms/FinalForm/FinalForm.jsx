import { Form } from '../../base/Form';
import success from '../../../assets/images/success.png';
import { NextPageButton } from '../../buttons/styleButtons/NextPageButton';

export function FinalForm() {
  return (
    <div className='full'>
      <Form>
        <div className="form__final">
          <img src={success} alt="Успешное бронирование" />
          <div className="bold">Заказ успешно оплачен</div>
          <div>
            <NextPageButton text="Забронировать еще" page="priceForm" />
          </div>
        </div>
      </Form>
    </div>
  );
}
