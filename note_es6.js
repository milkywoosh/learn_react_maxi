// Data Change with Mutation
var player = { score: 1, name: 'Jeff' };
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}


// Data Change without Mutation
var player = { score: 1, name: 'Jeff' };

var newPlayer = Object.assign({}, player, { score: 2 });
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};


// try to Change data WITHOUT MUTATION
let objA = {
    name: 'ben',
    age: 12
}

let newObjA = Object.assign({}, objA, { name: 'john' });
// console.log(newObjA);
// { name: 'john', age: 12 }

let newObjA1 = { ...objA, age: 14 };
// console.log(newObjA1)
// { name: 'ben', age: 14 }


// benefit NOT mutating original data
/*
    Complex Features Become Simple..

    Immutability makes complex features much easier to implement.
    Later in this tutorial, we will implement a “time travel” feature that allows us
    to review the tic - tac - toe game’s history and “jump back” to previous moves. 
    This functionality isn’t specific to games — 
    
    an ability to undo and redo certain actions is a common requirement in applications.

    Avoiding direct data mutation lets us keep previous versions of the
    game’s history intact, and reuse them later.
*/

///==============> SAMPE WHY IMMUTABILITY IS IMPORTANT


// console.log('i');

// setTimeout(()=> {
//     console.log('g')
// }, 0);

// console.log('x');


let myArr = [1,2,3]
function logArrayElements(element, index, array) {
  // console.log('a[' + index + '] = ' + element)
}

myArr.forEach((element, index, array) => {
  // console.log('a[' + index + '] = ' + element)
});

let arrs = [
  {
    name: 'ben',
    age: 12
  },
  {
    name: 'ron' ,
    age: 14
  },
]

let cek = [...arrs]
// console.log(cek)
cek.splice(0,2) // delete from 0 untill 1

let numb = [1,2,3,4,5];
let result_numb = numb.map( (value, index) => {
  if (value >2) {
    return value
  }
})

let filtering = result_numb.filter( (value) => {
  if (value != undefined) {
    return value
  }
})
// console.log(result_numb)
// console.log(filtering)


const dateTest = new Date(2021, 1, 20)
const dateTime = dateTest.toLocaleDateString('en-US', {day: '2-digit'});
const month = (dateTest.getMonth()) < 10 ? '0' + String(dateTest.getMonth())  : String(dateTest.getMonth()) ;
const month1 = dateTest.getMonth();
const year = dateTest.getFullYear();
/*
console.log(`${year}-${month}-${dateTime}`)

console.log(typeof(month))
console.log(typeof(month1))
console.log(typeof(year))
*/

const o1 = {a: "original a", b: "original b"};
console.log('o1: ', o1)

const o1Clone = {...o1}
console.log('o1Clone: ', o1Clone);

// Doesn't work:
const o2 = {a: "updated a", ...o1};
console.log('o2: ', o2);
// Works:
const o3 = {...o1, a: "updated a"};
console.log('o3: ', o3);
const o4 = {...o3}
console.log('o4: ', o4)

const data = { name: 'ben', age: 12}
const update = { ...data, name: 'RON' }
// knp saat key "name" diupdate jadi "RON" tetapi name "ben" terganti??
// karena saat ada reassignment value pada properti key yang sama pada suatu Object 
//maka suatu value pada key yang sama akan ter-ganti
// ini setara dengan menggunakan Object.assign(ObjTarget, {key: newValue})
// namun dengan syntax yang lebih sederhana, namun yang perlu diperhatikan adalah khusus pada Object updating dengan spread syntax
// letak '...data' pada {...data, name: 'new value}  harus diletakan pada paling kiri
// agar Object properties dapat diperbaharui, karena jika diletakan pada paling kanan Object maka tidak akan terganti sesuai harapan
console.log('update: ', update)


const initData = { name: 'ben', age: 12}
const updateInitdata = Object.assign(initData, {name: 'RON'})
console.log('updateInitdata: ', updateInitdata)




// penggunaan spread syntax pada Array (...array) adalah untuk memperbaharui array values atau juga
// dapat digunakan untuk meng-copy elemen-element yang ada di dalam array

const arr = [1, 2, 3, 4]
const arr1 = [30, 40, 50]
// contoh 1:
// pada updataArr array dilakukan penambahan banyak value sekaligus dari arr variable dengan menambahkan ...arr pada updateArr
// untuk penempatan spread syntax pada array dapat dilakukan pada posisi mana saja yang penting
// masih di dalam cakupan [ ] square bracket
const updateArr = [...arr, 10, 11, 12]
// contoh 2:
const updateArr_A = [...arr, ...arr1]
// console.log(updateArr)
// console.log(updateArr_A)



// spread array values pada parameter function
function myFunction(v, w, x, y, z) { 
  return [v,w,x,y,z]
}
let args = [0, 1];
let ceks= [100]
console.log('myFunction: ', myFunction(-1, ...args, 2, ...ceks));


function tesSpread(...data) {
  return [...data]
}
const pourIntoParameter = [1,2,3,4,5,6]
console.log('tesSpread: ', tesSpread(...pourIntoParameter))




