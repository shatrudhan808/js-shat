const myArr = [1,2,3,4,5]
const myFriends = ['amit','sohan','vinay']

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2]);
// console.log(myArr2[2]);

// array mehtods

// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(3))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);


// slice , splice
// console.log("A", myArr)

// const myn1 = myArr.slice(1, 2)
//  console.log(myn1)
//  console.log("B", myArr)

//  const myn2 = myArr.splice(1, 2)
//  console.log(myn2)
//  console.log("C", myArr)


const south_heroes = ["allu arjun","mahesh babu","pawan kalyan"]
const bhojpuri_heroes = ["pawan singh","khesari lal","dinesh lal"]
 south_heroes.push(bhojpuri_heroes)
//  console.log(south_heroes)
//  console.log(south_heroes[3][2])

// const all_heroes = south_heroes.concat(bhojpuri_heroes)
//console.log(all_heroes);

// const new_all_heroes = [...south_heroes, ...bhojpuri_heroes]
// console.log(new_all_heroes);

console.log(Array.isArray("shatrudhan"));
console.log(Array.from("shatrudhan"));
console.log(Array.from({name:"shatrudhan"}));

const score1= 100
const score2= 200
const score3= 300

console.log(Array.of(score1,score2,score3));






