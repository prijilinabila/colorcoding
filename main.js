/***var input = document.getElementsByClassName("color");
input.addEventListener("mouseout", colorchange)
function colorchange(){
    textcolor = input.value;
    input.style.color = textcolor;
    
}***/


var elements = document.getElementsByClassName("color");
console.log(elements);
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("keyup", colorchange)
   clearall()
}

function colorchange(event){
    textcolor = event.target.value;
    event.target.style.color = textcolor;
}
function clearall(){
    
}
