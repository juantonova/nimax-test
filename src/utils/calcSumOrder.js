export function calcSumOrder(order) {
  let sumOfNight;
  switch (order.typeOfRoom) {
    case 'Эконом': {
      sumOfNight = 1800;
      break;
    }
    case 'Cтандарт': {
      sumOfNight = 2800;
      break;
    }
    case 'Люкс': {
      sumOfNight = 4000;
      break;
    }
    default: {
      sumOfNight = 0;
    }
  }

  let sumOrder = sumOfNight * +order.numberOfAdults * +order.numberOfNights
   + Math.round((sumOfNight * +order.numberOfTeenagers * +order.numberOfNights) / 2);
  sumOrder = order.insurance ? Math.round(sumOrder *= 1.1) : sumOrder;
  return sumOrder;
}
