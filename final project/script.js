let first = function () {
    // navbar 

gsap.from(".nav",{
    y:-100,
    opacity:0,
    duration:1.5,
})

// left side

gsap.from(".left h1, h3",{
    x:-80,
    opacity:0,
    duration:2,
    delay:1.3,
})

gsap.from(".left .left-btn",{
    y:30,
    opacity:0,
    duration:2,
    delay:1.7,
})

// right 

gsap.from(".right img",{
    x:100,
    duration:2,
    opacity:0,
    delay:1.3
})

// bottom 

gsap.from(".first-bottom img",{
    y:10,
    opacity:0,
    delay:1.5,
    stagger:0.3
})
  
}

first()


let sec = function () {

    gsap.from(".head",{
     y:-70,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".sec-page",
        start:"top 90%",
        end:"top 0%"
    }
})

gsap.from(".a",{
    x:-50,
    opacity:0,
    duration:2,
        scrollTrigger:{
        trigger:".sec-page",
        start:"top 80%",
        // end:"top 25%"
    }
})

gsap.from(".b",{
    x:50,
    opacity:0,
    duration:2,
        scrollTrigger:{
        trigger:".sec-page",
        start:"top 80%",
        // end:"top 0%", 
        repeat:-1
    }
})

gsap.from(".c",{
    x:-50,
    opacity:0,
    duration:2,
        scrollTrigger:{
        trigger:".sec-page",
        start:"top 45%",
        // end:"top 0%", 
        repeat:-1
    }
})


gsap.from(".d",{
    x:50,
    opacity:0,
    duration:2,
        scrollTrigger:{
        trigger:".sec-page",
        start:"top 45%",
        // end:"top 0%", 
        repeat:-1
    }
})
    
}

sec()


gsap.from(".three-page",{
    y:-40,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".sec-page",
        start:"top 0%",
    }
})

gsap.from(".case",{
    x:-50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".sec-page",
        start:'65%',
    }
})