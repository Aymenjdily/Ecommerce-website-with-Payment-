import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51IJfMCGH65siANfVMcqyvze7xATtaAbn7dlZKfSJNvLTIrnF4ZIunSOy4Mnon8TgZ5vFQ7vk5Bz3FgFn7GXtRSc80066BpKz3B');
  }

  return stripePromise;
}

export default getStripe;