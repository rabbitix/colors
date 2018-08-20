
var colors = ['red','blue','black','yellow'];
var counter = 0;
var el = document.getElementById("body");


function changetext(){
    el.setAttribute("style","background-color:"+colors[counter]);
    counter++;
    if(counter>=colors.length){
        counter = 0;

    }
    
}

setInterval(changetext,600);