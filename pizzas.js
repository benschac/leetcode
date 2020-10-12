// Given an array of people objects (where each person has a name and a number of pizza slices they’re hungry for)
// and a number for the number of slices that the pizza can be sliced into, return the number of pizzas you need to buy.

function gimmePizza(arr, slices) {
  let totalSlices = arr.reduce((prev, curr) => {
    prev += curr.num;
    return prev;
  }, 0);

  return Math.ceil(totalSlices / slices);
}

let people = [
  { name: "Joe", num: 10 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
];
console.log(gimmePizza(people, 8));
