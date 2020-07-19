//variable for temperature in kelvin
kelvin=293;
//celcius is 273 less than kelvin
celsius=kelvin-273;
//fahrenheit calculation
fahrenheit=celsius*(9/5)+32;
//rounding the fahrenheit temperature using floor function
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//newton temperature
newton=celsius*(33/100)
newton=Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);
