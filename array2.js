let fruits = ["Apple", "Banana", "Mango", "Orange"];


console.log(fruits);

// Access array elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// Add element
fruits.push("Grapes");

// Remove last element
fruits.pop();

// Loop through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}