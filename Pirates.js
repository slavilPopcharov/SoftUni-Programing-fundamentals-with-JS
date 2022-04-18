function pirates(arrr) {
  let cities = {};
  while (arrr[0] !== "Sail") {
    let tokens = arrr.shift().split("||");
    let [name, pepole, gold] = tokens;
    if(!cities.hasOwnProperty(name)){
      cities[name] = [Number(pepole), Number(gold)]
    }else{
      cities[name][0] += Number(pepole);
      cities[name][1] += Number(gold);

    }
    
  }

  while (arrr[0] !== "End") {
    let tokens = arrr.shift().split("=>");
    let [command, city] = tokens;
    if (command === "Plunder") {
      let people = Number(tokens[2]);
      let gold = Number(tokens[3]);
      cities[city][0] -= people;
      cities[city][1] -= gold;
      console.log(
        `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      if (cities[city][0] <= 0 || cities[city][1] <= 0) {
        console.log(`${city} has been wiped off the map!`);
        delete cities[city];
      }
    } else if (command === "Prosper") {
      let curentGold = Number(tokens[2]);
      if (curentGold > 0) {
        cities[city][1] += curentGold;
        console.log(
          `${curentGold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`
        );
      } else {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
  } //while-2;
      if (Object.keys(cities).length > 0) {
        Object.keys(cities);
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let city in cities) {
        console.log( `${city} -> Population: ${cities[city][0]} citizens, Gold: ${cities[city][1]} kg` );
          }
      } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
      }
} //func;

pirates([
  
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"End"])

