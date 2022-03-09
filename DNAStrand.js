/*
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna){
    return dna.split("").map(a => a == 'A' ? a = 'T' : a == 'T' ? a = 'A' :a == 'G' ? a = 'C' :a == 'C' ? a = 'G' : " ").join("");
}
console.log(DNAStrand("ATTGC"));