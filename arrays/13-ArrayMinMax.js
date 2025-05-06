const ages = [20, 30, 50, 18, 34]

function getMin(arr) {
  if  (!arr) return

  let minVal = Math.min(...arr)
  let minPosition = arr.indexof(minVal)
  return [minVal, minPosition]
}

function getMax(arr) {
  if  (!arr) return

  let maxVal = Math.max(...arr)
  let maxPosition = arr.indexof(maxVal)
  return [maxVal, maxPosition]
}

console.log(getMin(ages))
console.log(getMax(ages))