/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
function duplicateEncode(word){
    return word.toLowerCase().split("").map((el,_,arr) => arr.indexOf(el) != arr.lastIndexOf(el) ? el = ")" : el = "(").join("");
}

console.log(duplicateEncode("Success"));