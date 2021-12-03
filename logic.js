let add=document.getElementById("add")
let min=document.getElementById("min")
let output=document.getElementById("output")
let reset=document.getElementById("reset")
add.addEventListener("click",function(e){
    output.innerText++
})
min.addEventListener("click",function(e){
    output.innerText--
})
window.addEventListener("keydown",function(e){
    if(e.keyCode == 107 || e.keyCode == 38){
        add.click()
    }
    else if(e.keyCode == 109 || e.keyCode == 40){
        min.click()
    }
    if(e.keyCode == 82){
        reset.click()
    }
})
reset.onclick = function(){
    output.innerText = 0
}