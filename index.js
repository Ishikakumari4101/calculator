let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (MouseEvent) =>{
    if(MouseEvent.target.innerHTML == '='){
        string=eval(string);
        input.value = string;
    }
    else if(MouseEvent.target.innerHTML == 'AC'){
        string= "";
        input.value = string;
    }
    else if(MouseEvent.target.innerHTML == 'C'){
        string=string.substring(0,string.length-1);
        input.value = string;
    }
    else{
         string += MouseEvent.target.innerHTML;
         input.value = string;
    }
}) 
})