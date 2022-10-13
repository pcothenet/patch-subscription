const { default: Patch } = require('@patch-technology/patch');

console.log(process.env);

const { PATCH_API_KEY } = process.env;
const DEFAULT_PROJECT_ID = PATCH_API_KEY.includes('key_test')
  ? 'pro_test_0de1a59eed9ff8474e09077ddb3714b2'
  : 'pro_prod_a0bd405145cf44b744edcaba0a6ae399'; // Charm Industrial
const PROJECT_ID = process.env.PROJECT_ID || DEFAULT_PROJECT_ID;
const BIWEEKLY_AMOUNT_USD = Number(process.env.BIWEEKLY_AMOUNT_USD);
const patch = Patch(PATCH_API_KEY);

async function placeOrder() {
  const order = await patch.orders.createOrder({
    total_price: BIWEEKLY_AMOUNT_USD * 100,
    currency: 'USD',
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
