//Convert Celsius to Kelvin

function convertToKelvin(tempCelsius) {
  let tempKelvin = tempCelsius + 273.15;
  return tempKelvin;
}

console.log(convertToKelvin(84));
console.log(convertToKelvin(95));
console.log("-------------------");

//Convert Fahrenheit to Kelvin

function convertToK(tempFahrenheit) {
  let tempKelvin = ((tempFahrenheit - 32) * 5) / 9 + 273.15;
  return tempKelvin;
}

console.log(convertToK(84));
console.log(convertToK(95));
console.log("-------------------");

//Tip calculator

function computeTip(totalBill) {
  let computeTip = (totalBill + 0) * 0.1;
  return computeTip;
}

console.log(computeTip(50));
console.log(computeTip(3000));
console.log(computeTip(300));
console.log(computeTip(30));
