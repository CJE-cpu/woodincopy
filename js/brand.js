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