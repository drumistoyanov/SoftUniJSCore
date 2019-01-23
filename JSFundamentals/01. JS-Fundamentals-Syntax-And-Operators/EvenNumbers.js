function solve(n) {
    let flag=false;
    let sum=0;
    let numberToString=n.toString();
    for(let i=0;i<numberToString.length;i++){
        sum+=Number(numberToString[i]);
if(numberToString[0]==numberToString[i]){
    
flag=true;
}else flag=false;}
console.log(flag);
console.log(sum);
    
}

solve(22222);