function solve(input){
    let regex = />(?:(?<t>[^<]*))<\//gm;
    let m;
    m=regex.exec(input);
   
    console.log(m.groups.t)
}

solve(['<h1><span>Hello World!</span></h1>',
'<p>I am Peter.']
)