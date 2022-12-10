let repo=0,perSecond=0,storage=100,cjevovod=1, cjevovodCounter=0, cjevovodCijena= 50,nepreradjena=0, preradjena=0, kvaliteta=10, pumpa=1, pumpaCijena=100, spremnici=1, spremniciCijena=10

const balance = document.getElementById("balance")
const Clicker = document.getElementById("clicker")
const Novci = document.getElementById("novci")
const Spremnik = document.getElementById("upgrade1")
const Pumpa = document.getElementById("upgrade2")
const Cjevovod = document.getElementById("upgrade3")
const Save = document.querySelector(".refinery")
const Load = document.querySelector(".stanic")

Load.addEventListener('click', ()=>{
    repo = parseInt(localStorage.getItem("repo"))
    perSecond = localStorage.getItem("perSecond" )
    storage = localStorage.getItem("storage")
    cjevovod = localStorage.getItem("cjevovod") 
    cjevovodCounter = localStorage.getItem("cjevovodCounter")
    cjevovodCijena = localStorage.getItem("cjevovodCijena")
    nepreradjena = localStorage.getItem("nepreradjena")
    preradjena = localStorage.getItem("preradjena")
    kvaliteta = localStorage.getItem("kvaliteta")
    pumpa = localStorage.getItem("pumpa")
    pumpaCijena = localStorage.getItem("pumpaCijena")
    spremnici = localStorage.getItem("spremnici")
    spremniciCijena = localStorage.getItem("spremniciCijena")
    console.log("Loaded")
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
    console.log("Saved")
})