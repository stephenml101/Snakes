
function greetUser() {
    alert("Welcome to the Animal Kingdom!");
}

function Question() {
    let correctAnswer = 6
    let howMany = prompt("How many letters are in the word snakes?");
    console.log("The user's answer is: " + howMany);
    while (howMany != 6) {
        alert("Sorry, wrong!");
        howMany = prompt("How many letters are in the word snakes?");
    }

}


let scaleQuestion = prompt("On a scale from 1 to 10, how much do you like snakes");
console.log(typeof(scaleQuestion));
for (let i = 0; i < scaleQuestion; i++){
    document.write('<img src="snake.jpeg" alt="Snake"/>')
}

if (scaleQuestion <= 11){
    console.log ("Snake Attack!")
}









function facts() {

    document.write("Here, you'll find some fun facts about snakes!");
}



function scary() {

    document.write("These ones are the scariest of them ALL!");
}
