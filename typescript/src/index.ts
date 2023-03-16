let message :string ="hello world";

console.log(message);

let userNumber : number = 123;//this section ":number" mean to avoid "any type data"
console.log({userNumber}); //this is will be declare an object

//any type data example

let myPet;
myPet = "cat";
myPet = 1234;

//we use "typescript" so we better avoid the "any" type data


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

let ourFriend : FriendType;

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

