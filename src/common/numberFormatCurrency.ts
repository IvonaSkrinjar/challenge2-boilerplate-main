const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})  

  const formatNumber =  (price:number) => {
    return CURRENCY_FORMATTER.format(price);  
}

   export const numberFormatCurrency= {
    formatNumber,
   }
   export default numberFormatCurrency;
