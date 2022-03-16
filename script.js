const word_but = document.getElementById("words-freq");
const letter = document.getElementById("letters");
const input = document.getElementById("input");
const results = document.getElementById("results");

word_but.addEventListener("click", () => {
  const words_inp = input.value;
  words_inp && word_frequency(words_inp);
});

letter.addEventListener("click", () => {
  const words_inp = input.value;
  words_inp && letter_frequency(words_inp);
});

input.addEventListener("keyup", function () {
  console.clear();

  Char.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if (words) {
    word.innerHTML = words.length;
  } else {
    word.innerHTML = 0;
  }

  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    console.log(sentences);
    sen.innerHTML = sentences.length - 1;
  } else {
    sen.innerHTML = 0;
  }

  if (words) {
    var paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
    para.innerHTML = paragraphs.length;
  } else {
    para.innerHTML = 0;
  }
});
