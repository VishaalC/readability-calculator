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
  console.log(max,maxKey);
});
