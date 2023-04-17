console.log("page charging...")

function loading(){
    alert("Loading weather report...")
}



var cookie = document.querySelector(".cookie-policy");

function accept(){
    cookie.remove();
}


function celsius(temp){
    return Math.round(9 / 5.50 * temp + 32);
}

function fahrenheit(temp){
    return Math.round(5.50 / 9 * (temp - 32));
}

function convert(element){
    console.log(element.value);
    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C"){
            tempSpan.innerText = celsius(tempVal);
        } else{
            tempSpan.innerText = fahrenheit(tempVal);
        }
    }
}