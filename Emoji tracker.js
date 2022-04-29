function two(arr) {
 let emojiREG = /(::|\*\*)([A-Z][a-z]{2,})\1/g
 let numbREG = /\d/g
 let str = arr.join('')
 let nums = str.match(numbREG);
 let allEmotes = str.match(emojiREG);
 
 let coolnes = 1;
 for (let num of nums) {
   coolnes *= num
 };
 console.log(`Cool threshold: ${coolnes}`);

 let CoolEmotes = [];
 for (let emote of allEmotes) {
   
    let emoteCoolness = 0;
   for ( let char of emote) {
  
     if ((char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)||
     (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)){
     emoteCoolness += char.charCodeAt(0);
     }
     
   }
   if(emoteCoolness >= coolnes){
     CoolEmotes.push(emote)
     
  }
   
 }
 console.log(`${allEmotes.length} emojis found in the text. The cool ones are:`);
 console.log(CoolEmotes.join("\n"));
}
two(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('----------');
two(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])