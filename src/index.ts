const { default: Patch } = require('@patch-technology/patch');

const patch = Patch(process.env.PATCH_API_KEY);

const DEFAULT_PROJECT_ID = 'pro_prod_a0bd405145cf44b744edcaba0a6ae399'; // Charm Industrial
const PROJECT_ID = process.env.PROJECT_ID || DEFAULT_PROJECT_ID;
const BIWEEKLY_AMOUNT_USD = Number(process.env.BIWEEKLY_AMOUNT_USD);

async function placeOrder() {
  const order = await patch.orders.createOrder({
    total_price_cents_usd: BIWEEKLY_AMOUNT_USD * 100,
    project_id: PROJECT_ID,
  });
  console.log(order);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handler(_event: any, _context: any) {
  // context.callbackWaitsForEmptyEventLoop = false;
  await placeOrder();
  return 'success';
}
