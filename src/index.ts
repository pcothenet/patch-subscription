// const _ = require('lodash');
// import Patch from '@patch-technology/patch';
const { default: Patch } = require('@patch-technology/patch');

const patch = Patch(process.env.PATCH_API_KEY);

const BIWEEKLY_AMOUNT_USD = Number(process.env.BIWEEKLY_AMOUNT_USD);

async function placeOrder() {
  const order = await patch.orders.createOrder({
    total_price_cents_usd: BIWEEKLY_AMOUNT_USD * 100,
    // project_id: "" // default to the project_id defined as Preferred on the dashboard
  });
  console.log(order);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handler(_event: any, _context: any) {
  // context.callbackWaitsForEmptyEventLoop = false;
  await placeOrder();
  return 'success';
}
