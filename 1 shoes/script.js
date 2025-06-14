 var x = gsap.timeline()

   x.from("li",{
    y:-30,
    opacity:0,
    delay:1,
    stagger:0.3
})
 
 gsap.from(".logo",{
    x:-100,
    rotate:-360,
    delay:.5,
    opacity:0,
 })

 gsap.from(".login button",{
    x:100,
    rotate:360,
    opacity:0,
    delay:.5,
})


gsap.from(".left .feet",{
 x:-100,
    opacity:0,
    duration:1,
    delay:2,

})

gsap.from(".left .sec",{
 x:-100,
    opacity:0,
    duration:1,
    delay:2,

})

 gsap.from(".left button",{
    // x:100,
    rotate:360,
    opacity:0,
    delay:3,
})

gsap.from(".right img",{
    x:100,
    opacity:0,
    duration:2,
    delay:2,
})
