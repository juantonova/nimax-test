export function thousandSeparator(num) {
  if (num === undefined || num === null) {
    return '-'; 
  }
  return new Intl.NumberFormat('ru-RU').format(num);
}
