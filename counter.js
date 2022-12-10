let repo=0,perSecond=0,storage=100,cjevovod=1, cjevovodCounter=0, cjevovodCijena= 50,nepreradjena=0, preradjena=0, kvaliteta=10, pumpa=1, pumpaCijena=100, spremnici=1, spremniciCijena=10

const balance = document.getElementById("balance")
const Clicker = document.getElementById("clicker")
const Novci = document.getElementById("novci")
const Spremnik = document.getElementById("upgrade1")
const Pumpa = document.getElementById("upgrade2")
const Cjevovod = document.getElementById("upgrade3")
const Save = document.querySelector(".refinery")
const Load = document.querySelector(".stanic")
var username = localStorage.getItem("usernamee")

console.log(username)

Load.addEventListener('click', ()=>{
    repo = parseInt(localStorage.getItem("repo"))
    perSecond = parseInt(localStorage.getItem("perSecond" ))
    storage = parseInt(localStorage.getItem("storage"))
    cjevovod = parseInt(localStorage.getItem("cjevovod"))
    cjevovodCounter = parseInt(localStorage.getItem("cjevovodCounter"))
    cjevovodCijena = parseInt(localStorage.getItem("cjevovodCijena"))
    nepreradjena = parseInt(localStorage.getItem("nepreradjena"))
    preradjena = parseInt(localStorage.getItem("preradjena"))
    kvaliteta = parseInt(localStorage.getItem("kvaliteta"))
    pumpa = parseInt(localStorage.getItem("pumpa"))
    pumpaCijena = parseInt(localStorage.getItem("pumpaCijena"))
    spremnici = parseInt(localStorage.getItem("spremnici"))
    spremniciCijena = parseInt(localStorage.getItem("spremniciCijena"))
    username = toString(localStorage.getItem("usernamee"))
    console.log("Loaded")
    console.log(username)
    console.log(toString(localStorage.getItem("usernamee")))
})
Spremnik.addEventListener('click', ()=>{
    if(repo>=spremniciCijena){
        spremnici++
        storage=100*spremnici
        spremniciCijena*=2
    }
})
Pumpa.addEventListener('click', ()=>{
    if(repo>=pumpaCijena){
        pumpa++
        pumpaCijena*=2
    }
})
Cjevovod.addEventListener('click', ()=>{
    if(repo>=0 && cjevovodCounter<4){
        cjevovod+=2;
        cjevovodCijena*=2;
        cjevovodCounter++
    }
    if(repo>=0 && cjevovodCounter>=4){
        console.log("ne valja")
    }
})


Clicker.addEventListener("click", repoadd )

setInterval(ispisibalans, 100)
setInterval(preradjenoupare, 5000)
//popoup
const poppup = document.querySelector('.poppup-modal');
const closePoppup = document.querySelector('.close');
const upgrades = document.querySelector('.upgrades');
upgrades.addEventListener('click',()=>{
    poppup.classList.toggle('active');
})
closePoppup.addEventListener('click',()=>{
    poppup.classList.toggle('active');
})
//endpopup

function ispisibalans(){
    balance.innerText = "Nafta: " + nepreradjena + "/" +storage;
    Novci.innerText = "Novac: " + repo;
}
function repoadd(){
    if(nepreradjena<storage){
        nepreradjena+=pumpa
    }
    balance.innerText = "Nafta: " + nepreradjena + "/" +storage;
}
function preradjenoupare(){
    if(nepreradjena-cjevovod>=0){
    preradjena=cjevovod
    nepreradjena-=cjevovod
    repo+=preradjena*kvaliteta
    preradjena=0
    }
    if(nepreradjena<cjevovod && nepreradjena>0){
        preradjena=nepreradjena
        nepreradjena=0
        repo+=preradjena*kvaliteta
        preradjena=0
    }
}
Save.addEventListener('click', ()=>{
    localStorage.setItem("repo", repo)
    localStorage.setItem("perSecond", perSecond)
    localStorage.setItem("storage", storage)
    localStorage.setItem("cjevovod", cjevovod)
    localStorage.setItem("cjevovodCounter", cjevovodCounter)
    localStorage.setItem("cjevovodCijena", cjevovodCijena)
    localStorage.setItem("nepreradjena", nepreradjena)
    localStorage.setItem("preradjena", preradjena)
    localStorage.setItem("kvaliteta", kvaliteta)
    localStorage.setItem("pumpa", pumpa)
    localStorage.setItem("pumpaCijena", pumpaCijena)
    localStorage.setItem("spremnici", spremnici)
    localStorage.setItem("spremniciCijena", spremniciCijena)
    localStorage.setItem("usernamee", toString(username))
    console.log("Saved")
})

const usernameModal = document.querySelector('.username-modal');
const overlay = document.querySelector('.overlay');
const nastavibutton = document.getElementById("nastavibutton")
overlay.classList.toggle("none")
if(Load.innerHTML="Username"){
window.addEventListener('DOMContentLoaded',()=>{
     usernameModal.classList.toggle("active");
     overlay.classList.toggle("active")
})
}
nastavibutton.addEventListener('click',()=>{
    usernameModal.classList.toggle("active");
    overlay.classList.toggle("active");
    Load.innerHTML = document.getElementById("myusername").value
})