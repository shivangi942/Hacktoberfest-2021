let btnTranslate = document.querySelector("#btn-translate");

let txtInput = document.querySelector("#txt-input");

let txtOutput = document.querySelector("#txt-output");

let serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationUrl(text){
    
    return serverUrl + "?text=" + text;
}

function errorHandler(error){
    console.log("error occured: ", error);

    alert("Something is going wrong at the moment! Please Try later.");
}

function clickEventHandler(){
    let inputText = txtInput.value;

    fetch(getTranslationUrl(inputText)).then(response => response.json()).then(json => {
        txtOutput.innerText = json.contents.translated;
    }).catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);