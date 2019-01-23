function solve(steps,footprintLengthInMeters,speed){
    let distanceInMeters=steps*footprintLengthInMeters;
    let time=(distanceInMeters/1000)/speed*3600;
    let timesNeededForBreak=-1;
    while(distanceInMeters>0){
        timesNeededForBreak++;
        distanceInMeters-=500;
    }
  time=time+timesNeededForBreak*60;
  time=Math.round(time);
    let date = new Date(null);
date.setSeconds(time); 
let timeString = date.toISOString().substr(11, 8);
console.log(timeString);
}
solve(2564, 0.70, 5.5);