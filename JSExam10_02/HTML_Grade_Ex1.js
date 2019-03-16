function solve(examPoints, homeworkCompleted, totalHomework){
    let maxExamPoints=90;
    let maxBonusPoints=10;
    let maxPoints=maxExamPoints+maxBonusPoints;
    let totalPoins=examPoints/400*0.9*100;  
    let bonus=homeworkCompleted/totalHomework*10;
    if(bonus>10){bonus=10;}
    totalPoins=totalPoins+bonus;
    let grade=3+2*(totalPoins-maxPoints/5)/(maxPoints/2);
    
if(grade===2||grade===3||grade===4||grade===5||grade===6){
        grade=`${grade}.00`;
};

    if(examPoints===400||grade>6){
        console.log('6.00');
    }else 
    if(grade===2||grade===3||grade===4||grade===5||grade===6){console.log(grade);
    }else if(examPoints<400 && grade>3) {
        console.log(grade.toFixed(2));
    }else if(grade<3){
        console.log('2.00')
    }
}

solve(44,5, 5);