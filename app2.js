function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

var num1 = prompt("Enter a number: ")

var num2 = prompt("Enter another number!")

alert(num1 + " to the power of " + num2 + " is " + num1**num2)

console.log(
    getRandomArbitrary(1,3)
)

let arr = ["a", "b", "c", "d", "e", "f"]

arr.pop()

arr.push("g")

arr.shift()

arr.unshift(1)

console.log(arr)