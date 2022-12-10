let repo = 0
let clickerValue = 1

const balance = document.getElementById("balance")
const Clicker = document.getElementById("clicker")
balance.innerText = "Balance: " + repo;
Clicker.addEventListener("click", repoadd )

function repoadd(){
    repo+=clickerValue
    console.log(repo)
    balance.innerText = "Balance: " + repo;
}

const poppup = document.querySelector('.poppup-modal');
const closePoppup = document.querySelector('.close');
const upgrades = document.querySelector('.upgrades');

upgrades.addEventListener('click',()=>{
    poppup.classList.toggle('active');
})
closePoppup.addEventListener('click',()=>{
    console.log('dsads')
    poppup.classList.toggle('active');
})
