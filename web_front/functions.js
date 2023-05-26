1-----------------------------------------------
function sum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            sum += numbers[i];
        }
    }
    return sum;
}

let numbers = [8, 15, 20, 40, 4, 9, 3];
console.log("Sum of even numbers:", sum(numbers));



2---------------------------------------------
function reverse(str){
    reversed = (str.split('')).reverse();
    reversed = reversed.join('');
    return reversed;
}

let input = "reverse the word!";
console.log("Reversed string:", reverse(input));


3------------------------------------------
function capital(arr){
    const capitalized = [];
    for (let i = 0; i < arr.length; i++){
        let capital = arr[i].toUpperCase();
        capitalized.push(capital);
    }
    return capitalized;
}

let strings = ["capital", "later", "javascript"];
console.log("Capitalized strings:", capital(strings));

