let main = document.querySelector(".main")
let cursor  = document.querySelector(".cursor")

main.addEventListener("mousemove", function (d) {
    gsap.to(cursor, {
        x:d.x,
        y:d.y
    })
} )