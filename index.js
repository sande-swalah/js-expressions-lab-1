//! Start by creating the variables for the data recorded

const day1TempF =32
const day2TempC =25
const day3TempF =70
const day4TempC =18
const day5TempF =80
const day6TempC =15
const day7TempF =72
const day8TempC =28
const day9TempF =68
const day10TempC =20
const day11TempF =75
const day12TempC =23
const day13TempF =82
const day14TempC =30
const day15TempF =65
const day16TempC =22
const day17TempF =77
const day18TempC =26
const day19TempF =78
const day20TempC =24
const day21TempF =73
const day22TempC =21
const day23TempF =79
const day24TempC =27
const day25TempF =71
const day26TempC =19
const day27TempF =74
const day28TempC =17
const day29TempF =76
const day30TempC =29

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// to convert temperature from fahrenheit to degrees Celsiusl
const day1TempC = (day1TempF - 32) * 5 / 9
const day3TempC = (day3TempF - 32) * 5 / 9
const day5TempC = (day5TempF - 32) * 5 / 9
const day7TempC = (day7TempF - 32) * 5 / 9
const day9TempC = (day9TempF - 32) * 5 / 9
const day11TempC = (day11TempF - 32) * 5 / 9
const day13TempC = (day13TempF - 32) * 5 / 9
const day15TempC = (day15TempF - 32) * 5 / 9
const day17TempC = (day17TempF - 32) * 5 / 9
const day19TempC = (day19TempF - 32) * 5 / 9
const day21TempC = (day21TempF - 32) * 5 / 9
const day23TempC = (day23TempF - 32) * 5 / 9
const day25TempC = (day25TempF - 32) * 5 / 9
const day27TempC = (day27TempF - 32) * 5 / 9
const day29TempC = (day29TempF - 32) * 5 / 9


//! Start the calculation of the total temperatures
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC 

//* Then apply the conversion to calculate the total in the other unit of measurement

const tot_temperature_in_fahrenheit = (tot_temperature_in_celsius * 9/5)+32

//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
const avg_temperature_in_celsius =  (tot_temperature_in_celsius / 30)
const avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit /30)
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like
console.log(tot_temperature_in_celsius)
console.log(tot_temperature_in_fahrenheit)
console.log (avg_temperature_in_celsius)
console.log (avg_temperature_in_fahrenheit)
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};