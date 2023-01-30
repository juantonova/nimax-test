import { useDispatch, useSelector } from 'react-redux';
import { makeOrder } from '../../../store/slices/orderSlice';
import { setOtherPage } from '../../../store/slices/modalSlice';
import { Button } from '../../base/Button';
import { orderSelector } from '../../../selectors/orderSelector';
import { customerSelector } from '../../../selectors/customerSelector';

export function MakeOrderButton({ text, page, className }) {
  const dispatch = useDispatch();
  const orderData = useSelector(orderSelector);
  const customerData = useSelector(customerSelector);

  async function setPage() {
    if (className !== 'form__button__error') {
      await dispatch(makeOrder({ order: orderData, customer: customerData }));
      dispatch(setOtherPage(page));
    }
  }

  return (
    <Button text={text} onClick={setPage} className={className} />
  );
}
