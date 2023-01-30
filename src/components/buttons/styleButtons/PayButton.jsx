import { MakeOrderButton } from '../functionButtons/MakeOrderButton';

export function PayButton({ text, page, disabled }) {
  return (
    <MakeOrderButton className={disabled ? 'form__button__error' : 'form__button__blue'} text={text} page={page} />
  );
}
