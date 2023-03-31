// let message:string ="hello world";
// let userNumber:number = 123;
// console.log(message);

// console.log({userNumber});//different : this is will be declare an object

let namaSaya: string = "Reza";
console.log(namaSaya);

//if u want to make variable to multidata(string or number)

let myFood : number | string ; //it is unlimited


myFood = "1 Yarim ekmek arasi tavuk";

//array  
    //string[], number[], any[]

let myGirl : string[];
myGirl = ["Sandy Cheeks","Mikasa Ackerman","Shizuka"];

//tuple array
let myEx : [string,number,boolean];
myEx = ["gabaghta",22,true];


/*
----------------- Custom Type Data Chapter -------------------------
*/

type FriendType = {
    name: string;
    alive : boolean;
    doubt :number;
}
// you must input the all element in the "FriendType" 
let ourFriend : FriendType;

ourFriend = {
    name :'messi',
    alive : true,
    doubt : 238,
};
console.log(ourFriend);

//if u want to optional some varieable , example we should not to input the "doubt" we can code below:
type GirlType = {
    name: string;
    alive : boolean;
    doubt?:number;
}

let myGf : GirlType;

myGf = {
    name  :"vonzy",
    alive : true,
};

console.log(myGf);


// Function 

function create(): string {
    return "Hello world";
}

console.log(create())


function createNumber() : number {
    return 23;
}
console.log(createNumber())


//Arrow Function 
const create2 = () : string => "hello world";
console.log(create2())

//for flexible console log
const create3 = () : string => "Hey World";
const result = create3();
console.log(create3());

//function : void
const create4 = ():void => console.log("Hiiii World");
create4();

const sumNumber = (): void => {
    let aa = 1;
    let b = 2;
    let z = aa + b;
    console.log("ahahaha " + z); //output ahahaha 3
  };

  sumNumber();

// function add(x,y) example
const addNumber = (x,y): void => {
    const z = x+y;
    console.log("the result is :" + z);
  };

addNumber(12 + 22); // this is will error;
//you can fix this error with ("noImplicitAny": false,)  in tsconfig.json file


// function sumNumber2(x,y) example
const sumNumber2 = (x:number,y:number): void => {
    const z:number = x+y;
    console.log("the result is :" + z);
  };

sumNumber2(12,22);

/*
----------------- Add Function Chapter -------------------------
*/

function add(x:number,y:number):string {
    return `${x} + ${y} = ${x+y} `;
}

console.log(add(20,30));

//in Arraw Fucntion

const add2 = (x: number, y: number): string => {
    return `${x} + ${y} = ${x + y}`;
  };

console.log(add2(12,30));

/*
----------------- Type  Chapter -------------------------
*/

type anime = string;
let Aot : anime;

Aot = "Freedom";

console.log(Aot); //output : Freedom


//Part 2
type Woman = string;
type Man = string;

type Gender = Woman | Man;

let human : Gender;

human = "Levi Ackermann";
console.log(human);

/*
------------ Interface Chapter----------
*/

interface IProsesor{
    brand : string;
    baseModel : string;
    modelName : string;
    clockSize : number;
}

function createInterface(parameter : IProsesor): void{
    console.log(`Your Information 
    Prosesor Brand : ${parameter.brand}
    Base model : ${parameter.baseModel}
    MOdel name : ${parameter.modelName}
    Clock size :
    
      
    `);
}
//We must make new variale(const)

const intelCore5{
    brand : "intel",
    baseModel :"A",
    modelName : "Ahashg",
    clockSize : 4,
}
//After made the variable we use this variable to the fucntion as parameter in function
create(in)
