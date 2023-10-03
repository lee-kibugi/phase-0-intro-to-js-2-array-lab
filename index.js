// // Original array of cats
// const originalCats = ["Milo", "Otis", "Garfield"];

// // Function to reset the array to its original contents
// function resetArray(arr) {
//   arr.length = 0; // Clear the array
//   arr.push(...originalCats); // Re-populate the array with original values
// }

// // Example of using the resetArray function
// const cats = ["Milo", "Otis", "Garfield", "Whiskers"];
// console.log("Original Cats:", cats);

// resetArray(cats);
// console.log("Reset Cats:", cats);


// Original array of cats
const originalCats = ["Milo", "Otis", "Garfield"];
const cats = [...originalCats]; // Create a copy of the original array

// Append a cat to the end of the cats array (destructively)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepend a cat to the beginning of the cats array (destructively)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove the last cat from the cats array (destructively)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove the first cat from the cats array (destructively)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat to the cats array and return a new array (non-destructively)
function appendCat(name) {
  return [...cats, name];
}

// Prepend a cat to the cats array and return a new array (non-destructively)
function prependCat(name) {
  return [name, ...cats];
}

// Remove the last cat from the cats array and return a new array (non-destructively)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Remove the first cat from the cats array and return a new array (non-destructively)
function removeFirstCat() {
  return cats.slice(1);
}