const button = document.getElementById("calc");
const input = document.getElementById("input");
const results = document.getElementById("results");

button.addEventListener("click", () => {
  words = input.value;
  words = words.split(" ");
  let count = {};
  words.forEach((word) => {
    if (word in count) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });

  let max = 0;
  let maxKey = "";
  for (key in count) {
    if (count[key] > max) {
      max = count[key]; 
      maxKey = key;
    }
  }
  results.innerText = maxKey;
  console.log(count);
});

input.addEventListener('keyup', function() {
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
    var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
    para.innerHTML = paragraphs.length;
  } else {
    para.innerHTML = 0;
  }

})