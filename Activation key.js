function one(arr) {
 let activationKey = arr.shift()
 
 while (arr[0] !== "Generate"){
   let lines = arr.shift().split('>>>');
   let command = lines[0];
   if (command === "Contains"){
     let target = lines[1]
     if (activationKey.includes(target)){
       console.log(`${activationKey} contains ${target}.`);
     }else{
      console.log("Substring not found!");

     }
   }

   else if (command === "Flip"){
     let [toCase, stardInd, endInd] = [lines[1], lines[2], lines[3]];
     let sub = activationKey.substring(stardInd, endInd);
     let left = activationKey.substring(0, stardInd);
     let right = activationKey.substring(endInd);
    
     if (toCase === "Upper"){
      sub = sub.toUpperCase()
      activationKey = left + sub + right;
     }else if (toCase === "Lower"){
      sub = sub.toLowerCase()
      activationKey = left + sub + right;
     }
     console.log(activationKey);
   }

   else if (command === "Slice"){
     let [start, end] = [lines[1], lines[2]];
     let sub = activationKey.substring(start, end);
     let left = activationKey.substring(0,start);
     let right = activationKey.substring(end)
     activationKey = left + right;
     console.log(activationKey);
   }
 }
 console.log(`Your activation key is: ${activationKey}`);
}
one([
"abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
console.log('-----------');
one(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])


