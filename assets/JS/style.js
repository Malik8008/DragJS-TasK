let drop =document.querySelector(".dropcircle")
let cir1 =document.querySelector(".circle1")
let cir2 =document.querySelector(".circle2")
let cir3 =document.querySelector(".circle3")


cir1.style.backgroundColor="green"
cir2.style.backgroundColor="orange"
cir3.style.backgroundColor="aqua"

cir1.addEventListener('dragend', ()=>{
    drop.style.backgroundColor=cir1.style.backgroundColor
});


cir2.addEventListener('dragend', ()=>{
    drop.style.backgroundColor=cir2.style.backgroundColor
});


cir3.addEventListener('dragend', ()=>{
    drop.style.backgroundColor=cir3.style.backgroundColor
});