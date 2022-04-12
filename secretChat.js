
// Решнение - лектор
function secretChat(arr) {
  let text = arr.shift();
  let commands = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };
  while (arr[0] != "Reveal") {
    let tokens = arr.shift().split(":|:");
    let [name, paramOne, paramTwo] = tokens;
    let command = commands[name];
    text = command(text, paramOne, paramTwo);
  }
  console.log(`You have a new text message: ${text}`);

  function InsertSpace(text, index) {
    let leftHalf = text.slice(0, index);
    let rightHalf = text.slice(index);
    let newText = leftHalf + " " + rightHalf;
    console.log(newText);
    return newText;
  }
  function Reverse(text, substr) {
    let index = text.indexOf(substr);
    if (index != -1) {
      let left = text.slice(0, index);
      let right = text.slice(index + substr.length);
      let newText = left + right + substr.split("").reverse().join("");
      console.log(newText);
      return newText;
    } else {
      console.log("error");
      return text;
    }
  }
  function ChangeAll(text, substr, replacement) {
    let newText = text.split(substr).join(replacement);
    console.log(newText);
    return newText;
  }
}
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
