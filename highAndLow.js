/*
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
function highAndLow(numbers){
    return typeof(numbers) == 'string' ? [Math.max.apply(null,numbers.split(" ")),Math.min.apply(null,numbers.split(" "))].join(" ") : false;
}

console.log(highAndLow("1 9 3 4 -5"));