export const formatPrice = (price: number, currency = 'UAH') =>
  new Intl.NumberFormat('uk-UA', { style: 'currency', currency }).format(price)
