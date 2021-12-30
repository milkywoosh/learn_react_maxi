
// METHOD atau cara berikut sangat penting dipahami!!!
// karena kita akan sering menggunakan cara tsb dalam penggunaan ReactJs !!!!

const person = {
    name: 'mosh',
    walk() {
      console.log(this);
    },
    age: 43
  }
  
    person.walk();
    const walk = person.walk.bind(person); // bind function to object 
                        // bind()  will be seen in a lot of apps using REACT
    walk();// called without object, will return 'undefined' as global/windos object
           // so 'bind()' is used to set walk() as global obj which will return person obj.
  

// ===========================================================

//Arrow function 

const square = function(number) {
    return number*number;
}

// Arrow functino as another form of function
const square = number => number*number;
square(argument) 

// ===========================================================

// Filter() method;

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];
 

// normal form of function;
const activeJobs = jobs.filter(function(job) {return job.isActive});
// using arrow function;
const activeJobs = jobs.filter(job => job.isActive);
// implementation
const activeJobs = jobs.filter(job => job.isActive == true); // will return id:1 and id: 2

const element = <h1>{}</h1>

for (let i=0; i<activeJobs.length; i++) {
  // console.log(activeJobs[i].id, activeJobs[i].isActive);
}


// ===========================================================
// ---- Arrow function and this
// important: arrow function dont rebind 'this';


const person = {
    talk() {
        
        // function will be executed after 1000 milisec == 1 sec delay
        setTimeout(() => { 
          console.log('self', this);
        }, 1000);
        
    }
  }

// ===========================================================

// using Map( callback function) Method
const colors = ['red', 'green', 'blue'];

const items = colors.map((color) =>  <li> + {color} + </li>);

// or using literal string
const items = colors.map((color) => `<li>${color}</li>`)

// insert items variable inside
const element = <h1>{items}</h1>


// ===========================================================

// Object Destructuring;

let address = {
  street = 'Protokol',
  city = 'Jakarta',
  country = 'Indonesia'
};

// biasanya calling properties dgn cara:
const street = address.street;
const city = address.city;
const country = address.country;


// the following is using "object desctructuring" process:
const { street:st, city, country} = address;
// creating alias for property of object in object desctrucuturing
const {street:st} = address;

const element = <h2>{country}, {city}, {st}</h2>


const { name:n, state:s, age:umur} = name_age;
// console.log(n, s, umur);

// ===========================================================

// Spread Opertator can be used for 'Array' and 'Object';

// --- Spread Operator for Array ---
const first = [1,2,3]; 
const second = [4,5,6];

// biasanya concatenating dgn cara
const combine = first.combine(second);

// with Spread Operator: benefit, can add value any position or index among concatenation;
const combine_spread = ['add value', ...first, 'add some value in between' , ...second];

// Spread Operator bisa juga untuk cloning;
const clone_first = [...first];

// --- Spread Operator for Object ---;
const firstObj = {name : 'john'};
const secondObj = {age : 12};

const combine_obj = {...firstObj, ...secondObj, nationality: 'germany'};
// cloning object using Spread Operator
const testObj = {...firstObj};


// ===========================================================


