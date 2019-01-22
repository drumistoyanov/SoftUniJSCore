function last(v) {
    let arr=[];
    let counter=0;
for(let i=0;i<v.length;i+=2){
    let object={name:v[i],cals:v[i+1]}
    arr[counter]=object;
    counter++;
}
let stringz="";
for(let i=0;i<arr.length;i++){
    if(i!=arr.length-1) {
        stringz += `${arr[i].name}: ${arr[i].cals}, `
    }
    else{
        stringz += `${arr[i].name}: ${arr[i].cals}`
    }
}
console.log(`{ ${stringz} }`)
}

last(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);