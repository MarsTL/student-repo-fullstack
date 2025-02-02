/** Exercise 01 - Coins **/
//testing
// Add your function here 
function calculateChange(amount) {
  if (amount > 100 || amount < 0) {
    return `${amount.toFixed(2)} ==> Error: the number  is too large or negative`;
  }

  //dollar to cents
  let cents = Math.round(amount * 100);

  //coin value
  const cValues = {
    dollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  //result holer
  let result = [];

  // Calculate the number of each coin
  for (let coin in cValues) {
    let cCount = Math.floor(cents / cValues[coin]);
    if (cCount > 0) {
      result.push(`${cCount} ${coin}${cCount > 1 ? 's' : ''}`);
    }
    cents %= cValues[coin];  // Update remaining cents
  }

  // Format the result as a string
  //return result.join(', ');
  let formattedAmount = `$${amount.toFixed(2)}`;
  return `${formattedAmount} ==> ${result.join(', ')}`;
}



// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here 
console.log(calculateChange(0.01));
console.log(calculateChange(-1));
console.log(calculateChange(99.99));