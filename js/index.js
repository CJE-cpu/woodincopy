let scroll = document.querySelectorAll(".scroll")
let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(item){
        if(item.isIntersecting){
            item.target.classList.add("on")
        }else{
            item.target.classList.remove("on")
        }
    })
}, {
    threshold : 0.5
})
scroll.forEach(function(item){
    observer.observe(item)
})

// window.addEventListener("scroll", function(){
//     let lastScroll = 0
//     if(window.scrollY > lastScroll){
//         window.scrollBy(0, window.innerHeight)
//     }
// })


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
