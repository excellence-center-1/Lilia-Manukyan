let name = prompt("What is your name?")
let age = parseInt(prompt("What is your age?"))
if(age < 0 || isNaN(age)) {
  alert(`You enter a wrong age`);
}
else {
    if(age <= 12){
        alert(`Welcome ${name}! You are in childhood.`);
    }
    else if(age <= 19){
        alert(`Welcome ${name}! You are a teenager.`);
    }
    else if(age <= 19){
        alert(`Welcome ${name}! You are a young adult.`);
    }
    else if(age <= 29){
        alert(`Welcome ${name}! You are an adult.`);
    }
    else if(age <= 59){
        alert(`Welcome ${name}! You are a senior.`);
    }
    else{
        alert(`Wellcome ${name}! You are a senior.`)
    }
}
