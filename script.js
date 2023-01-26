const result = document.querySelector(" .result ");
const confirm = document.querySelector(" .equal ");

function handleInsert(value){
    result.innerHTML += value;
}

function handleClean(){
    result.innerHTML = " ";
}

function handleBackSpace(){
    if(result.textContent){
        let res = document.getElementById("result").innerHTML
        result.innerHTML = res.substring(0, res.length - 1) 
    }
}

function handleConfirm(){
    if(result.textContent !== "erro"){
        document.getElementById("result").innerHTML = eval(result.innerHTML)
    }
}