/**
 * An action is the JS object that tells the reducer how to change its data
 * it contains the type prop/ command and the bunch of data.
*/

/**
 * * the following string constants are the action types
*/

/**
 * * the other function constants are telling the reducer how to change the data
*/
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';

export const CONVERSION_RESULT = 'CONVERSION_RESULT ';
export const CONVERSION_ERROR = 'CONVERSION_ERROR ';

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency,
});

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency,
});

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
});

export const handleResult = () => ({
  type: CONVERSION_ERROR,
});
export const handleError = () => ({
  type: CONVERSION_ERROR,
});
