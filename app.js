let offBulb = document.getElementById("offBulb")

let offBtn = document.getElementById("offBtn")
let onBtn = document.getElementById("onBtn")

onBtn.addEventListener ("click" , function(){
    offBulb.src = "onBulb.jpg"
} )

offBtn.addEventListener ("click" , function(){
    offBulb.src = "offBulb.jpg"
} )

