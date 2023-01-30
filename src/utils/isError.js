export function isError(data) {
  for (const key in data) {
    if (data[key]) {
      return true;
    }
  }

  return false;
}
