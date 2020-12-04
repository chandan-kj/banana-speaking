var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function errorHandler(error){
  console.log("error occured",error)
  alert("Site is down try again after some times")
}

function clickHandler() {
  var inputText = textInput.value;// input

  //calling server
  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerHTML = translatedText// output
  })
  .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);