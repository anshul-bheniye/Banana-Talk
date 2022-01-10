var btnClick = document.querySelector("#tapme");
var txt = document.querySelector("#textArea");
var div = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// function getTranslationURL(input) {
//     return serverURL + "?" + "text=" + input
// }

var getTranslationURL = input => `${serverURL}?text=${input}`;

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with server! try again after some time")
// }

var errorHandler = error => {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
}

function clickHandler() {
    var inputText = txt.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            div.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnClick.addEventListener("click", clickHandler)