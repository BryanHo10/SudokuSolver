var table=[];
var puzzle=[];
var w;
var inProgress=[];
var solutions=[];
var global=0;
var para;
var timeStamp;


function setup(){
    createCanvas(700,700);
    para=createP("Hello");
    //timeStamp=createP("Hello");
    para.style('font-size','64px');
    para.style('font-family',"Comic Sans MS");
    //timeStamp.style('font-size','32px');
    para.position(width+50,windowHeight/4);
    background(225,255,250);
    var r=floor(random(1,7));
    //r=6;
    switch(r){
        case 1:
            readTextFile("Sudoku1.txt");
            para.html("Sudoku #1");
            break;
        case 2:
            readTextFile("Sudoku2.txt");
            para.html("Sudoku #2");
            break;
        case 3:
            readTextFile("Sudoku3.txt");
            para.html("Sudoku #3");
            break;
        case 4:
            readTextFile("Sudoku4.txt");
            para.html("Sudoku #4");
            break;
        case 5:
            readTextFile("Sudoku5.txt");
            para.html("Sudoku #5");
            break;
        case 6:
            readTextFile("Sudoku6.txt");
            para.html("Sudoku #6");
            break;
    }
        
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
//   timeStamp.html(date.getMinutes() + " : "+ date.getSeconds());
//    console.log(date.getSeconds());
    for(var i=0;i<18;i++){
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
    
}



function resetSwitch(r){
        switch(r){
        case 1:
            readTextFile("Sudoku1.txt");
            para.html("Sudoku #1");
            break;
        case 2:
            readTextFile("Sudoku2.txt");
            para.html("Sudoku #2");
            break;
        case 3:
            readTextFile("Sudoku3.txt");
            para.html("Sudoku #3");
            break;
        case 4:
            readTextFile("Sudoku4.txt");
            para.html("Sudoku #4");
            break;
        case 5:
            readTextFile("Sudoku5.txt");
            para.html("Sudoku #5");
            break;
    }
    solutions=[];
    inProgress=[];
    global=0;
    for(var y=0;y<9;y++){
        for(var x=0;x<9;x++){
            table[y*9+x]=new Cell(x,y,w,puzzle[y*9+x]);
            if(table[y*9+x].unSolved){
                inProgress.push(table[y*9+x]);
            }
        }
    }
    solutions.push(inProgress[global]);
    
    draw();
    
    
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