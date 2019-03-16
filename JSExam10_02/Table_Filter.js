function solve(matrix,command){
    let splittedCommand=command.split(' ');
let array=[];


    switch(splittedCommand[0]){
        case 'sort':
        let headerName=splittedCommand[1];
for(let i=0;i<matrix.length;i++){
    
    console.log(`${matrix[0][i]}" | "${matrix[0][i]}" | "${matrix[0][i]}`)
    if(matrix[0][i]===headerName){
        matrix.sort(sortFunction);
        }
        for(let i=0;i<matrix.length-1;i++){
            let j=0;
                console.log(`${matrix[i][j++]}" | "${matrix[i][j++]}" | "${matrix[i][j++]}`);
            
        }
    }
        break;
        case 'hide':
       var headerName1=splittedCommand[1];
var findColumn=0;
        for(let column=0;column<matrix.length;column++){
            if(matrix[0][column]===headerName1){
                findColumn=column;
            }
        
        }
        for(let column=0;column<matrix.length;column++){
          matrix[column][findColumn]="toRemove";
          
        
        }
        let filtered;
        
            for(let row=0;row<matrix.length;row++){
          filtered= filtered.concat(matrix[row].filter(item => item !== "toRemove"))
                
              }
          
              console.log(filtered)
         
           
            
        

        break;
        case 'filter':
       let headerName2=splittedCommand[1];
        let value=splittedCommand[2];
        let savedRow;
        for(let row=0;row<matrix.length;row++){
            for(let column=0;column<matrix.length;column++){
                if(matrix[row][column]===value)
                savedRow=row;
            }
        }
        
            console.log(matrix[0][0])
            console.log(matrix[savedRow][0])
          
            break;
    }
    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
}
