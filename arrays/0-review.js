const cities = ["Athens", "Paris", "Toronto"]

//Add  - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))
const citiesSorted = cities.sort((a, b) => a.localeCompare(b, "en")) // Shallow copy

//Deep Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

//Shallow copies -- Spread operator
const cities3 = [...cities]
let maxVal = Math.max(...[1, 2, 3, 4])
let maxIndex = cities.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)