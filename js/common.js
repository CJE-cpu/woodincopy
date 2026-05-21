let navs = document.querySelectorAll("nav ul li")
        let snbBox = document.querySelectorAll(".snbBox")
        let header = document.querySelector("header")

        navs.forEach(function(item, idx){
            item.addEventListener("mouseenter", function(){
                snbBox[idx].classList.add("on")
                header.style.background = "#ededed"
                header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)"
            })
            item.addEventListener("mouseleave", function(){
                snbBox[idx].classList.remove("on")
                header.style.background = "none"
                header.style.boxShadow = "none"
            })
        })
        snbBox.forEach(function(item, idx){
            item.addEventListener("mouseenter", function(){
                snbBox[idx].classList.add("on")
                header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)"
            })
            item.addEventListener("mouseleave", function(){
                snbBox[idx].classList.remove("on")
                header.style.boxShadow = "none"
            })
        })