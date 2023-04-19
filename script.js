let TranslateButton = document.querySelector("#translate-btn");
let InputTextArea = document.querySelector("#input-text");
let OutputTextArea = document.querySelector("#output-text");
// console.log(TranslateButton);
// console.log(InputTextArea);
// console.log(OutputTextArea);

const url = "https://api.funtranslations.com/translate/minion.json";

function clickHandler() {
  let inputText = InputTextArea.value;
  // console.log(inputText);
  fetch(getFinalURL(inputText))
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      OutputTextArea.innerText = data.contents.translated;
    })
    .catch((error) => console.log(error));
}

function getFinalURL(text) {
  return url + "?" + "text=" + text;
}

TranslateButton.addEventListener("click", clickHandler);
