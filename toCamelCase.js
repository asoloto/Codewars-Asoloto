/*
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str){
    const regex = /_|-/gi;
    return str.replace(regex," ").split(" ").map((el,i,arr)=>i>0?el.replace(arr[i][0],arr[i][0].toUpperCase()):el).join("")
}

console.log(toCamelCase("the-stealth-warrior"));