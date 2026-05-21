let storyboxSNSimgs = document.querySelectorAll(".storyboxSNSimg div")

storyboxSNSimgs.forEach(function(item,idx){
    item.addEventListener("mouseenter", function(){
        item.classList.add("on")
    })
    item.addEventListener("mouseleave", function(){
        item.classList.remove("on")
    })
})