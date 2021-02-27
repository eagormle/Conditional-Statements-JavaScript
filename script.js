var containerEle = document.body.querySelector(".container");
var num1=Number(prompt("Enter a number: "));
if(isNaN(num1)){
 containerEle.innerHTML= "Please enter a real number for the first number.";
  end;
}
var num2=Number(prompt("Enter a second number: "));
if(isNaN(num2)){
 containerEle.innerHTML= "Please enter a real number for the second number.";
  end;
}
var sym=prompt("Enter +,-,*,/: ");
if(sym==='+'){
   var total = (num1+num2)
  containerEle.innerHTML= total
}else{
  containerEle.innerHTML="Please enter +,-,*, or /.";
}
if(sym==='-'){
   var total = (num1-num2)
  containerEle.innerHTML= total
}
if(sym==='*'){
   var total = (num1*num2)
  containerEle.innerHTML= total
}
if(sym==='/'){
   var total = (num1/num2)
  containerEle.innerHTML= total
}