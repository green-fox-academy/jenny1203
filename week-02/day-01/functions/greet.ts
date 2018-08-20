// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`
let greeting:string = 'Greetings, dear ';
let greetName: string = 'Greenfox';
function greet(greeting: string, name: string){
    console.log(greeting + name);
}
greet(greeting, greetName);