export function transformName(customer) {
  return `${customer.surname} ${customer.name} ${customer.middleName}`;
}

export function transformPhone(customer) {
  const phone = customer.phonenumber;
  if (phone) {
    return `
        ${phone.slice(0, 2)} 
        ${phone.slice(2, 5)} 
        ${phone.slice(5, 8)} 
        ${phone.slice(8, 10)}
        ${phone.slice(11)}`;
  }
  return '';
}

export function transformRoomInfo(order) {
  let night;
  switch (+order.numberOfNights) {
    case 1: {
      night = 'ночь';
      break;
    }
    case 2:
    case 3:
    case 4: {
      night = 'ночи';
      break;
    }
    default: {
      night = 'ночей';
      break;
    }
  }

  return `Номер "${order.typeOfRoom}" на ${order.numberOfNights} ${night}`;
}

export function transformCountOfPeople(order) {
  let adult = (+order.numberOfAdults === 1) ? 'взрослый' : 'взрослых';
  adult = `${+order.numberOfAdults} ${adult}`;
  let teenager = '';
  let child = '';
  function checkChildrenCount(count) {
    switch (+count) {
      case 1: {
        return 'ребенок';
      }
      case 2:
      case 3:
      case 4: {
        return 'ребенка';
      }
      default: {
        return 'детей';
      }
    }
  }

  if (+order.numberOfTeenagers > 0) {
    teenager = `, ${(order.numberOfTeenagers)} ${(checkChildrenCount(order.numberOfTeenagers))} от 12 лет`;
  }

  if (+order.numberOfChildren > 0) {
    child = ` и ${(order.numberOfChildren)} ${checkChildrenCount(order.numberOfChildren)} младше 12 лет`;
  }
  return adult + teenager + child;
}

export function transformInsurance(order) {
  return (
    (order.insurance) ? 'Страховка включена' : 'Страховка не включена'
  );
}
