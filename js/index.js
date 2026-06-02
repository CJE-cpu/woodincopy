const scroll = document.querySelectorAll(".scroll")
const move = document.querySelectorAll(".move")
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
move.forEach(function(item){
    observer.observe(item)
})

function createAutoScroller(selector) {
  const sections = document.querySelectorAll(selector);

  let currentIndex = 0;
  let isScrolling = false;

  return function (deltaY) {
    if (isScrolling) return;

    isScrolling = true;

    if (deltaY > 0) {
      currentIndex = Math.min(
        currentIndex + 1,
        sections.length - 1
      );
    } else {
      currentIndex = Math.max(
        currentIndex - 1,
        0
      );
    }

    sections[currentIndex].scrollIntoView({
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
    }, 800);
  };

}


const autoScroll = createAutoScroller('.scroll');

window.addEventListener('wheel', (e) => {
  autoScroll(e.deltaY);
});

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
