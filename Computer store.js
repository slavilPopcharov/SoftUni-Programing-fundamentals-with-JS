function computerStore(array) {
  let index = 0;
  let priceWithoutTaxes = 0;
  let taxes = 0;
  while (array[index] != `regular` && array[index] != `special`) {
      let currNum = Number(array[index]);
      if (currNum < 0) {
          console.log(`Invalid price!`);
      } else {
          priceWithoutTaxes += currNum;
          taxes += currNum * 20 / 100
      }
      index++
  }
  let isVallid = true;
  if (priceWithoutTaxes == 0) {
      console.log(`Invalid order!`);
      isVallid = false
  }
  let priceWithTaxes = priceWithoutTaxes + taxes;
  let totalPrice = priceWithTaxes;
  if (array[index] == `special`) {
      let discount = 10 / 100;
      totalPrice -= totalPrice * discount;
  }
  if(isVallid){
  console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
  Taxes: ${taxes.toFixed(2)}$
  -----------
  Total price: ${totalPrice.toFixed(2)}$`);
}
}
  
  
