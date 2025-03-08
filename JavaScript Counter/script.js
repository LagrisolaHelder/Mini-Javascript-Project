let DisplayNumber = document.getElementById("Output");
let addOne = document.getElementById("btnAdd");
let btnReset = document.getElementById("Reset");
 
let takeOne = document.getElementById("btnTake");


function addNumber(){
   DisplayNumber.textContent = Number(DisplayNumber.textContent) +1;


}

function resetValues(){
    DisplayNumber.textContent = 0;
}

function takeNumber(){
    DisplayNumber.textContent = Number(DisplayNumber.textContent) -1;
  
}

addOne.onclick = addNumber;
takeOne.onclick = takeNumber;
btnReset.onclick = resetValues;
 