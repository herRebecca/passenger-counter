 // document.getElementById("count-el").innerText=13
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

let count=0

function increment(){
    count+=1
    countEl.textContent=count
    console.log(count)
}
function Save(){
    countStr= count + " - "
   saveEl.textContent+=countStr
   countEl.textContent=0
   count=0
}


