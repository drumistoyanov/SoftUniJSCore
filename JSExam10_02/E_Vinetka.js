const chai=require('chai').assert



function solve(input){
    let townsAndPrices=[];
    let towns=[];
    let totalProfit=0;
    let town;
    let models=[];
input.forEach(car => {
        townsAndPrices.push({
         town: car.town,
         price: car.price
     })});

    input.forEach(element => {
        models.push(element.model);
    });

townsAndPrices.forEach(element => {
    if(!towns.some(r=>r.town===element.town)){
        towns.push(element);
    }else{
        towns.find(o => o.town === element.town).price+=element.price;
        }})
    ;
    function mode(array)
    {
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }
towns.forEach(element => {
    if(element.price>totalProfit){
        totalProfit=element.price;
        town=element.town;
    }
});



let mostDrivenModel=[];
models.forEach(element => {
    
mostDrivenModel.push(mode(element));
});
let mostDrivenArray=[]
input.forEach(element => {
    if(element.model===mostDrivenModel){
        if(!mostDrivenArray.some(r=>r.town===element.town)){
            mostDrivenArray.push(element);
        }else{
          mostDrivenArray.find(o => o.town === element.town).regNumber+=", "+element.regNumber;
            }; 
    }
});



console.log(`${town} is most profitable - ${totalProfit} BGN`);
console.log(`Most driven model: ${mode(models)}`);
mostDrivenArray.forEach(element => {
    console.log(`${element.town}: ${element.regNumber}`)
});
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
{ model: 'Lada', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
{ model: 'Lada', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
{ model: 't', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
);

describe()