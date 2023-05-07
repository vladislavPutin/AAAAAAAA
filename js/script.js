function izm(){

    let h1=prompt('ИЗМЕНИ ЗАГОЛОВОК !','');

    ex.innerHTML=h1;
}


function plus() {

    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    num1=Number(num1);
    num2=Number(num2);

    let sum= num1+num2;

    res.innerHTML=sum;
}


function minus() {

    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    num1=Number(num1);
    num2=Number(num2);

    let raznost= num1-num2;

    res.innerHTML=raznost;
}


function reset(){

     document.getElementById('num2').value='';
     document.getElementById('num1').value='';


     res.innerHTML=0;
}
