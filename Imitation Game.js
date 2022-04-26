function imitation(arr) {
  let text = arr.shift();

  while (arr[0] !== "Decode") {
    let lines = arr.shift().split('|');
    let [command, p1, p2] = lines;
    if (command === "ChangeAll"){
       text = text.split(p1).join(p2);
    
    }
     else if (command === "Insert"){
      let leftHalf = text.slice(0, p1);
      let rightHalf = text.slice(p1);
      text = leftHalf + p2 + rightHalf;
     }
     else if (command === "Move"){
      let move = text.slice(0,p1);
      let stay = text.slice(p1);
      text = stay + move;
     }; 
  }
  console.log(`The decrypted message is: ${text}`);
}
imitation(['zzHe','ChangeAll|z|l','Insert|2|o','Move|3','Decode']);
console.log('---------');
imitation(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode']);