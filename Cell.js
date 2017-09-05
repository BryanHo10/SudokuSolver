function Cell(x,y,w,num){
    this.x=x;
    this.y=y;
    this.w=w;
    this.index=this.y*9+this.x;
    this.num=num;
    this.unSolved=true;
    if(this.num!=0)
        this.unSolved=false;
        
    
    this.show=function(){
        fill(225,255,250);
        stroke(51);
        push();
        strokeWeight(4);
        stroke(0)
        line(this.w*3,0,this.w*3,height);
        line(this.w*6,0,this.w*6,height);
        
        line(0,this.w*3,height,this.w*3);
        line(0,this.w*6,height,this.w*6);
        
        pop();
        rect(this.x*this.w,this.y*this.w,this.w,this.w);
        
        if(!this.unSolved){
            fill(0);
            textSize(32);
            text(this.num,(this.x*this.w+this.w/2)-8,(this.y*this.w+this.w/2)+8);
        }
        else if(this.num!=0){
            push();
            noStroke();
            fill(255,0,100);
            textSize(32);
            text(this.num,(this.x*this.w+this.w/2)-8,(this.y*this.w+this.w/2)+8);
            pop();
        }
    }
    
    
this.checkError=function(){
    if(this.checkErrorBox()||this.checkErrorCol()||this.checkErrorRow()){
//        console.log(this.checkErrorBox());
//        console.log(this.checkErrorCol());
//        console.log(this.checkErrorRow());
        return true;
    }
   // console.log(this.num);
    return false;
}
this.checkErrorBox=function(){
    var xBox=floor(floor(this.index%9)/3);          //0, 1, 2 Col
    var yBox=floor(floor(this.index/9)/3);          //0, 1, 2 Row
    //console.log(yBox + " / "+xBox);
    var counterBox=((yBox*3)*9)+(xBox*3);
    //console.log(counterBox);
    var invalid=[];
    for(var i=0;i<3;i++){
        
        if(invalid.includes(puzzle[counterBox])&& puzzle[counterBox] !=0){
            
            return true;
        }
        invalid.push(puzzle[counterBox]);
        counterBox++;
    }
    counterBox+=6;
    for(var i=0;i<3;i++){
       if(invalid.includes(puzzle[counterBox])&& puzzle[counterBox] !=0){
            return true;
        }
        invalid.push(puzzle[counterBox]);
        counterBox++; 
    }
    counterBox+=6;
    for(var i=0;i<3;i++){
        if(invalid.includes(puzzle[counterBox])&& puzzle[counterBox] !=0){
            return true;
        }
        invalid.push(puzzle[counterBox]);
        counterBox++;
    }
    
    
    return false;
}

this.checkErrorRow=function(){
    var iRow=floor(this.index/9);
    var counter=iRow*9;
    var invalid=[];
    while(floor(counter/9)==iRow){
        if(invalid.includes(puzzle[counter])&& puzzle[counter] !=0){
            return true;
        }
        invalid.push(puzzle[counter]);
        counter++;
        //console.log(invalid+"Hori");
    }
    return false;
}

this.checkErrorCol=function(){
    var iCol=floor(this.index%9);
    var counter=iCol;
    var invalid=[];
    while(counter<=table.length){
        //console.log(invalid);
        if(invalid.includes(puzzle[counter])&& puzzle[counter] !=0){
            return true;
        }
        invalid.push(puzzle[counter]);
        counter+=9;
        //console.log(invalid);
    }
    return false;
    
}
    
this.increaseValue=function(){
    if(this.num==9){
        return false;
    }else{
    this.num++;
    return true;
    }
}
this.resetValue=function(){
    this.num=0;
}
}