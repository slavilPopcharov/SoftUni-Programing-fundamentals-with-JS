function gameON(arr) {
  let myMsg = arr.shift();
  while (arr[0] !== "Done"){
    let lines = arr.shift().split(' ');
    let command = lines[0];  
    if(command === "Change"){
      let char = lines[1]
      let replacement = lines[2]
      myMsg = myMsg.split(char).join(replacement);
      console.log(myMsg);
    }
    else if(command === "Includes"){
      let check = lines[1];
      if (myMsg.includes(check)){
        console.log("True");
      }else{
        console.log("False");}
    }
    else if(command === "End"){
      let check = lines[1];
      if (myMsg.endsWith(check)){
        console.log("True");
      }else{
        console.log("False");}
    }
    else if(command === "Uppercase"){
      myMsg = myMsg.toUpperCase()
      console.log(myMsg);
    }
    else if(command === "FindIndex"){
      let char = lines[1];
      console.log(myMsg.indexOf(char));
    }
    else if(command === "Cut"){
      let start = lines[1];
      let count = lines[2];
      let newText = myMsg.substr(start,count);
      console.log(newText); 
    }
  }
}
gameON(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
console.log("-----------");
gameON(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
