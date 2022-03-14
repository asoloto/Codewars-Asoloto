/*
ASCII - A:65 , a:97    ->a=1,b=2,...
        Z:90 , Z:122
*/
function alphabetPosition(text) {
    return text.split("").map(el => el.replace(/[a-z]|[A-Z]/g,el.charCodeAt())).filter(el=> (el>64 && el<91) || (el>96 && el<123)).map(el=> (el>64 && el<91) ? el-64: el-96).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))