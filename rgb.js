/*
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b){
    return [r,g,b].map(val=>val>255 ? 255: val<0 ? 0 : val).map(el => el.toString(16).toUpperCase()).map(n=>n.length==1 ?'0'+n:n)
}

console.log(rgb(233,15,153));