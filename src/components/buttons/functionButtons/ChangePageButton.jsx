import { useDispatch } from 'react-redux';
import { setOtherPage } from '../../../store/slices/modalSlice';
import { Button } from '../../base/Button';

export function ChangePageButton({ text, page, className }) {
  const dispatch = useDispatch();

  function setPage() {
    if (className !== 'form__button__error') {
      dispatch(setOtherPage(page));
    }
  }

  return (
    <Button text={text} onClick={setPage} className={className} />
  );
}
