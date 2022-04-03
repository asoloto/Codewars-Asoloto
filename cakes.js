/* 
2:
    receta    : {flour: 500, sugar: 200, eggs: 1}, 
    disponible: {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
0:
    receta    : {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
    disponible: {sugar: 500, flour: 2000, milk: 2000}
*/

function cakes(recipe, available) {
    if(Object.keys(recipe).length <= Object.keys(available).length){
        var aRecipe = new Array();
        var aAvailable = new Array();

        for(var i in recipe){
            aRecipe.push([i,recipe[i]]);
        }
        for(var j in available){
            aAvailable.push([j,available[j]]);
        }
        var countArray = new Array();
        for(var m = 0; m<aRecipe.length; m++){
            for(var n = 0; n<aAvailable.length; n++){
                if(aRecipe[m][0] == aAvailable[n][0]){
                    if(aRecipe[m][1] <= aAvailable[n][1]){
                        countArray.push(Math.trunc(aAvailable[n][1]/aRecipe[m][1]));
                    }
                }
            }
        }
        console.log(countArray);
        if(countArray.length == aRecipe.length){
            return Math.min.apply(null,countArray)
        }
        else{
            return 0;
        }
    }
    else{
        return 0;
    }
}
console.log(cakes
                 (
                    {flour: 500, sugar: 200, eggs: 1}, 
                    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
                 )
           );
