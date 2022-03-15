function factorial(n){
    let arr = [1];
    for(let i=2; i<=n; i++){
        let el = 0;
        for(let j=0; j<arr.length || el!=0; j++){
            el += (arr[j] || 0)*i;
            arr[j] = el%10;
            el = Math.floor(el/10);
        }
    }
    return arr.reverse().join("");
}
console.log(factorial(4))