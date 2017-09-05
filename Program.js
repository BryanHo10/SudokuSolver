var table=[];
var puzzle=[];
var w;
var inProgress=[];
var solutions=[];
var global=0;

function setup(){
    createCanvas(700,700);
    background(225,255,250);
    readTextFile("Sudoku4.txt");    
    w=width/9;
    for(var y=0;y<9;y++){
        for(var x=0;x<9;x++){
            table[y*9+x]=new Cell(x,y,w,puzzle[y*9+x]);
            if(table[y*9+x].unSolved){
                inProgress.push(table[y*9+x]);
            }
        }
    }
    solutions.push(inProgress[global]);
    //frameRate(5);
}
function draw(){
   
    if(solutions.length<=inProgress.length){
        var current=solutions[solutions.length-1];
        if(current.increaseValue()){
             for(var i=0;i<table.length;i++){
        table[i].show();
        puzzle[i]=table[i].num;
    }
           // console.log(current);
            if(!current.checkError()){
                global++;
                solutions.push(inProgress[global]);
                
            }
            
            
            
        }
        else{
            global--;
            solutions[solutions.length-1].resetValue();
            solutions.pop();
        }
        
    }
    else{
        noLoop();
    }
    
    
    
}




















function readTextFile(file)         //readTextFile("file:///C:/your/path/to/file.txt");
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                for(var i=0;i<allText.length;i++){
                    puzzle[i]=parseInt(allText[i]);
                }
                //console.log(puzzle);
                
            }
        }
    }
    rawFile.send(null);
}