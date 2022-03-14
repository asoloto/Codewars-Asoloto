/*
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str){
    let a = str.split(" ")
    let b = a.map(el => (el!="!" && el!="?") ? el.substring(1)+el.substring(0,1)+"ay": el).join(" ")
    return b
}

console.log(pigIt("Hello world !"))