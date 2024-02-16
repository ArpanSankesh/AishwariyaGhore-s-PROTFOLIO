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
        start:'-50% 50%',
        end:'50% 50%',
        scrub:2
    }
})
tl.to('.hero h1:nth-child(1)',{
    opacity:1,
    translateX:"-50vw",
},"a")
tl.to('.hero h1:nth-child(2)',{
    opacity:1,
    translateX:"50vw"
},"a")
tl.to('.hero h1:nth-child(3)',{
    opacity:1,
    translateX:"-50vw"
},"a")


var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section-2',
        start:'-20% 50%',
        end:'100% 50%',
        scrub:true
    }
})

tl1.to('.section-2',{
    // borderTopLeftRadius:"1%",
    // borderTopRightRadius:"1%"
    borderRadius:0
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.text-area',
        start:'0% 50%',
        end:'100% 50%',
        scrub:2,
        // pin:true
    }
})

tl.to('.text-area-hover',{
    width:'100%'
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section-4',
        start:'0% 50%',
        end:'100% 50%',
        scrub:2
    }
})

tl.to('.right img',{
    borderRadius:"10%",
    opacity:1,
    marginTop:0, 
},"b")
tl.to('.left',{
    marginTop:0,
    opacity:1
},"b")
