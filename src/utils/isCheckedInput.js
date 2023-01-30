export function isCheckedInput(type) {
  if ((type === 'checkbox') || (type === 'radio')) {
    return true;
  }
  return false;
}
