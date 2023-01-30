export async function makeOrder(data) {
  const order = JSON.stringify(data);
  await fetch('/', {
    method: 'POST',
    body: order,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const info = await new Promise((res) => setTimeout((() => res({ status: 'ok' })), 2000));
  return info;
}
