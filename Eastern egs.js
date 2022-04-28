function eEgs(arr) {
  let line = arr[0]
 let regEx = /[@|#)]{1,}([a-z]{3,})[@|#)]{1,}\W{0,}[\/]{1,}(\d{1,})/g
 let matches = regEx.exec(line);
 while (matches !== null){
   let eggColor = matches[1];
   let count = Number(matches[2]);
   console.log(`You found ${count} ${eggColor} eggs!`);
   matches = regEx.exec(line);
 } 
}
eEgs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
console.log('-------');
eEgs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])