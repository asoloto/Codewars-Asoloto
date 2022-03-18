/*
apples, pears # and bananas     |   apples, pears
grapes                          |   grapes
bananas !apples                 |   bananas
--------------------------------
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/
function solution(input, markers) {
    return input.split("\n").map(w=>w.replace(new RegExp(`[${markers.join("")}].+`,'g'),'').trimEnd()).join('\n')
};