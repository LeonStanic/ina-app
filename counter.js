let kolona=1, kolonaCijena=75, repo=0,perSecond=0,storage=100,cjevovod=1, cjevovodCijena= 50,nepreradjena=0, preradjena=0, kvaliteta=10, pumpa=1, pumpaCijena=100, spremnici=1, spremniciCijena=10

const balance = document.getElementById("balance")
const Clicker = document.getElementById("clicker")
const Novci = document.getElementById("novci")
const Spremnik = document.getElementById("upgrade1")
var SpremnikOpis = document.querySelector("#upgrade1desc")
const Pumpa = document.querySelector("#upgrade2")
const Cjevovod = document.querySelector("#upgrade3")
const Kolona = document.querySelector("#upgrade4")
const Save = document.querySelector(".refinery")
const Load = document.querySelector(".stanic")
const vid = document.querySelector("#background-video")
var username = localStorage.getItem("usernamee")
var PumpaOpis = document.querySelector("#upgrade2desc")
var CjevovodOpis = document.querySelector("#upgrade3desc")
var KolonaOpis = document.querySelector("#upgrade4desc")
Load.innerHTML = username
console.log(Load.innerHTML)


SpremnikOpis.innerHTML = "Povećava maksimalnu količinu nafte (" + spremnici + ")"
PumpaOpis.innerHTML = "Povećava količinu nafte dobivene po kliku (" + pumpa + ")"
CjevovodOpis.innerHTML = "Povećava količinu nafte prerađenu svakih 5 sekundi (" + cjevovod + ")"
KolonaOpis.innerHTML = "Povećava vrijednost nafte (" + kolona + ")"


Load.addEventListener('click', ()=>{
    repo = parseInt(localStorage.getItem("repo"))
    perSecond = parseInt(localStorage.getItem("perSecond" ))
    storage = parseInt(localStorage.getItem("storage"))
    cjevovod = parseInt(localStorage.getItem("cjevovod"))
    cjevovodCijena = parseInt(localStorage.getItem("cjevovodCijena"))
    nepreradjena = parseInt(localStorage.getItem("nepreradjena"))
    preradjena = parseInt(localStorage.getItem("preradjena"))
    kvaliteta = parseInt(localStorage.getItem("kvaliteta"))
    pumpa = parseInt(localStorage.getItem("pumpa"))
    pumpaCijena = parseInt(localStorage.getItem("pumpaCijena"))
    spremnici = parseInt(localStorage.getItem("spremnici"))
    spremniciCijena = parseInt(localStorage.getItem("spremniciCijena"))
    username = localStorage.getItem("usernamee")
    console.log("Loaded")
    console.log(username)
})
Spremnik.addEventListener('click', ()=>{
    if(repo>=spremniciCijena){
        spremnici++
        storage=100*spremnici
        spremniciCijena*=2
        console.log(spremnici)
    }
    SpremnikOpis.innerHTML = "Povećava maksimalnu količinu nafte (" + spremnici + ")"
})
Pumpa.addEventListener('click', ()=>{
    if(repo>=pumpaCijena){
        pumpa++
        pumpaCijena*=2
    }
    PumpaOpis.innerHTML = "Povećava količinu nafte dobivene po kliku (" + pumpa + ")"
    console.log(pumpa)
})
Cjevovod.addEventListener('click', ()=>{
    if(repo>=cjevovodCijena){
        cjevovod++;
        cjevovodCijena*=2;
    }
    CjevovodOpis.innerHTML = "Povećava količinu nafte prerađenu svakih 5 sekundi (" + cjevovod + ")"
})
Kolona.addEventListener('click', ()=>{
    if(repo>=kolonaCijena){
        kolona++;
        kolonaCijena*=2;
    }
    KolonaOpis.innerHTML = "Povećava vrijednost nafte (" + kolona + ")"
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
    kvaliteta*=kolona
    repo+=preradjena*kvaliteta
    preradjena=0
    }
    if(nepreradjena<cjevovod && nepreradjena>0){
        preradjena=nepreradjena
        nepreradjena=0
        kvaliteta*=kolona
        repo+=preradjena*kvaliteta
        preradjena=0
    }
}
Save.addEventListener('click', ()=>{
    localStorage.setItem("repo", repo)
    localStorage.setItem("perSecond", perSecond)
    localStorage.setItem("storage", storage)
    localStorage.setItem("cjevovod", cjevovod)
    localStorage.setItem("cjevovodCijena", cjevovodCijena)
    localStorage.setItem("nepreradjena", nepreradjena)
    localStorage.setItem("preradjena", preradjena)
    localStorage.setItem("kvaliteta", kvaliteta)
    localStorage.setItem("pumpa", pumpa)
    localStorage.setItem("pumpaCijena", pumpaCijena)
    localStorage.setItem("spremnici", spremnici)
    localStorage.setItem("spremniciCijena", spremniciCijena)
    localStorage.setItem("usernamee", username)
    console.log("Saved")
    console.log(username)
})

const usernameModal = document.getElementById('neznamvise');
const overlay = document.querySelector('.overlay');
const nastavibutton = document.getElementById("nastavibutton")
overlay.classList.toggle("none")
if(!username){
    overlay.classList.toggle("none")
console.log(Load.innerHTML)
window.addEventListener('DOMContentLoaded',()=>{
     usernameModal.classList.toggle("active");
     overlay.classList.toggle("active")
    vid.play()
})

nastavibutton.addEventListener('click',()=>{
    usernameModal.classList.toggle("active");
    overlay.classList.toggle("active");
    overlay.classList.toggle("none")
    Load.innerHTML = document.getElementById("myusername").value
    username = document.getElementById("myusername").value
})
}
