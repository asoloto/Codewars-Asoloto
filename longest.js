/*
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
function longest(s1, s2) {
    return [...new Set((s1.split("")+","+s2.split("")).split(","))].sort().join("");
}

console.log(longest("aretheyhere","yestheyarehere"))