let home5imgs = document.querySelectorAll(".home5img img")
let cur = document.querySelector(".cur")

home5imgs.forEach(function(item){
    item.addEventListener("mousemove", function(e){
        cur.style.left = e.clientX + "px"
        cur.style.top = e.clientY + "px"
    })

    item.addEventListener("mouseenter", function(){
        cur.style.display = "block"
    })
    item.addEventListener("mouseleave", function(){
        cur.style.display = "none"
    })
})