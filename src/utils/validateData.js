export function validateDataOrder(data, type, adult, child) {
  switch (type) {
    case ('numberOfAdults'): {
      if (data === 0) {
        return ['Не менее одного взрослого'];
      }
      if ((+child) > (+data * 3)) {
        return ['Нa одного взрослого не более 3 детей', 'numberOfChildren'];
      }
      return [undefined, 'numberOfChildren'];
    }
    case ('numberOfNights'): {
      if (data === 0) {
        return ['Неверные данные'];
      }
      break;
    }
    case ('numberOfChildren'): {
      if ((+data) > (+adult * 3)) {
        return ['Нa одного взрослого не более 3 детей'];
      }
      break;
    }
    default: return [];
  }
  return [];
}

export function checkNumber(data) {
  if (!data || data === '0' || data < 0) {
    return 0;
  }
  const regexp = /^0/g
  const num = data.replace(regexp, '')
  return num
}

export function checkData(e) {
  return e.target?.id
    ? e.target?.id
    : (e.target?.type === 'text' || e.target?.type === 'number')
      ? checkNumber(e.target?.value)
      : e.target?.type === 'checkbox'
        ? e.target.checked
        : e;
}

export function validateDataCustomer(data, type) {
  switch (type) {
    case ('surname'):
    case ('name'): {
      if (!data.trim()) {
        return 'Поле обязательно для заполнения';
      }
      break;
    }
    case ('phonenumber'): {
      if (data?.length !== 13) {
        return 'Необходимо указать номер в формате +7ХХХХХХХХ-ХХ';
      }
      break;
    }
    default: return undefined;
  }
  return undefined;
}

export function checkPhone(data) {
  const regexp = /\d/g;
  const number = data.match(regexp).join('');
  if (number === '') {
    return '+7';
  }
  if (number.length > 9) {
    return ((number[0] === '7')
      ? `+${number.slice(0, 9)}-${number.slice(9, 11)}` : `+7${number.slice(0, 8)}-${number.slice(8, 10)}`);
  }
  return ((number[0] === '7')
    ? `+${number}` : `+7${number}`);
}

export function isCurrentCustomerData(data) {
  return (data.surname !== '' && data.name !== '' && data.phonenumber?.length === 13);
}
