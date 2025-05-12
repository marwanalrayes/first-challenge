let countEl = document.getElementById("Click-btn")
let saveEl = document.getElementById("Paragraph")
let count = 0
function incresing (){
    count +=1
    countEl.innerText=count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count=0
}