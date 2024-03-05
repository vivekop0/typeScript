
interface User{
  firstName:string;
  lastName:string;
  age:number
, email?:string
}



function isLegal(user:User){

  if(user.age>18){
    return true;
  } else {
    return false;
  }
}

function greet(user:User){
  console.log("hello"+user.firstName);
}



isLegal({
  firstName:"vivek", 
  lastName:"sarkar",
  age:20
})


interface Person{
  name:string;
  age:number;
  greet(phrase:string):void;
}

class Employee implements Person{
  name: string;
  age: number;

  constructor(n:string,a:number){
    this.name =n;
    this.age =a;

  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee('vivek',22);
console.log(e.name)


type Greetarg = number |string;
function greets(id:Greetarg):Greetarg{
  return id
}


/// Arrays in typescript

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));