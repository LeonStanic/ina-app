let repo = 0
let clickerValue = 1

const Clicker = document.getElementById("clicker")
Clicker.addEventListener("click", repoadd )

function repoadd(){
    repo+=clickerValue
    console.log(repo)
}

const balance = document.getElementById("balance")
balance.innerText = "Balance: " + repo;