let open = document.querySelector(".ri-list-unordered")

let cut = document.querySelector(".ri-close-line")

let side = document.querySelector(".side")

let ul = document.querySelector("ul")

let li = document.querySelectorAll("li")


open.addEventListener("click", function (params) {

gsap.to(side,{
    x:"-100%",
    duration:2,
})    

gsap.to(open,{
    opacity:0
})

gsap.from(cut,{
    delay:2.3,
    opacity:0
})

gsap.from(li,{
    x:100,
    opacity:0,
    duration:2,
    stagger:0.2
})
})

 // for close side bar

cut.addEventListener("click",function () {
    gsap.to(side,{
    x:"10%",
})   

gsap.to(open,{
    opacity:1
})
})




// cursor move

let cursor = document.querySelector(".cursor")

let main = document.querySelector(".main")

main.addEventListener("mousemove", function (d) {

    gsap.to(cursor,{
        x:d.x,
        y:d.y
    })
    
})