// var tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.section-2',
//         scroller:'body',
//         start:'50% 50%',
//         end:'50% 50%',
//         markers:true
//     }
// })
gsap.from('.nav-bar',{
    y:"-300px"
})

gsap.to('.hero h1:nth-child(1)',{
    delay:0.5,
    opacity:1,
    translateX:0,
})
gsap.to('.hero h1:nth-child(2)',{
    delay:0.5,
    opacity:1,
    translateX:0
})
gsap.to('.hero h1:nth-child(3)',{
    delay:0.5,
    opacity:1,
    translateX:0
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.section-2',
        start:'-20% 50%',
        end:'50% 50%',
        markers:true,
        scrub:true
    }
})

tl.to('.section-2',{
    borderTopLeftRadius:0,
    borderTopRightRadius:0
})

