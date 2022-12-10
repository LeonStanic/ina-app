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


