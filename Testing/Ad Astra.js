function ad(str) {
let regex = /(\||#)([A-Za-z\s]{1,})\1(\d\d\/\d\d\/\d\d)\1(\d{0,10000})\1/gm
let matches = regex.exec(str);
let totalCalories = 0;
let info = [];

while (matches !== null) {
  let itemName = matches[2];
  let expirationDate = matches[3];
  let calories = Number(matches[4]);
  totalCalories += calories;
  info.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`)

  matches = regex.exec(str);
}
let days = totalCalories / 2000

//print days:
console.log(`You have food to last you for: ${Math.floor(days)} days!`);
//print food info:
if(totalCalories > 0){
  console.log(info.join("\n"));
}
}
ad(['#Bread#19/03/21#100#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log("-------");
ad(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log("-------");
ad(['Hello|#Invalid food#19/03/20#450|$5*(@'])