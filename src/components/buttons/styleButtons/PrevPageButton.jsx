import { ChangePageButton } from '../functionButtons/ChangePageButton';

export function PrevPageButton({ text, page }) {
  return (
    <ChangePageButton className="form__button__white" text={text} page={page} />
  );
}
