import { ChangePageButton } from '../functionButtons/ChangePageButton';

export function NextPageButton({ text, page, disabled }) {
  return (
    <ChangePageButton className={disabled ? 'form__button__error' : 'form__button__blue'} text={text} page={page} />
  );
}
