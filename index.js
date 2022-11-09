const wordsList = [];

function addWord() {
  var word = document.getElementById("textinp").value;
  wordsList.push(word);
}

function searchWord() {
  let search_query = document.getElementById("searchWord").value;
  const foundWord = wordsList.find(element => element == search_query);
  let header = document.querySelector("h1");
  if (foundWord) {
    header.innerText = foundWord;
  } else {
    header.innerText = "The word is not found";
  }
}