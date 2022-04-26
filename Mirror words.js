function mirrorWords(arr) {
  let patern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let matches = patern.exec(arr);
  let result = [];
  let count = 0;
  while (matches != null) {
    count++
    let word1 = matches[2];
    let word2 = matches[3];
    let reversed = word2.split('').reverse().join('');
    if(word1 === reversed){
      result.push(`${word1} <=> ${word2}`)
    }
    matches = patern.exec(arr);
  }
  let mirrorwords = result.join(', ');

  count > 0 ?
  console.log(`${count} word pairs found!`):
  console.log("No word pairs found!");

 result.length > 0 ?
  console.log(`The mirror words are:\n${mirrorwords}`):
  console.log("No mirror words!"); 
}
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ]
  )
