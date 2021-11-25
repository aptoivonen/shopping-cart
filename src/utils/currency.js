export const formatCurrency = (currency) => currency / 100;

export const prefixCurrency = (currency) => "$" + currency;

export const formatAndPrefixCurrency = (currency) =>
  prefixCurrency(formatCurrency(currency));
