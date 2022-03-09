/*
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/
function maskify(cc){
    let b = new Array()
    if(cc.length>4) {
        let a = cc.split("");
        let lim = a.length - 4;
        for(let i=0; i<a.length; i++){
            if(i < lim){
                a[i] = '#';
            }
            b.push(a[i]);
        }
        return b.join("");
    }
    else{
        return cc;
    }
}
console.log(maskify("415616"));