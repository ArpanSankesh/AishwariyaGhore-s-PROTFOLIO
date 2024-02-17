var menuBtn = document.querySelector('.menu-btn i');
var hamMenu = document.querySelector('.ham-menu');
var hamItems = document.querySelector('.menu-wraper');
var logo = document.querySelector('.portfolio-txt h1');
let flag = 0;
var dropDownMenu = function(){
    if (flag === 0){
        hamMenu.style.top = "0";
        hamMenu.style.right = "0";
        hamMenu.style.borderRadius = "0";
        logo.style.color = "#fff";
        hamItems.style.opacity = 1;
        menuBtn.style.color = "#fff";
        flag = 1;
    }else{
        hamMenu.style.top = "-100%";
        hamMenu.style.right = "-100%";
        hamMenu.style.borderRadius = "50%";
        hamItems.style.opacity = 0;
        logo.style.color = "#0c0c0c";
        menuBtn.style.color = "#0c0c0c";
        flag = 0;
    }
}

menuBtn.addEventListener('click',dropDownMenu)


gsap.from('.nav-bar',{
    y:"-300px",
    // stagger: 0.1
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





var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.text-area',
        start:'0% 50%',
        end:'100% 50%',
        scrub:2,
        // pin:true
    }
})

tl2.to('.text-area-hover',{
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

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.text-area2',
        start:'0% 50%',
        end:'100% 50%',
        scrub:2,
    }
})

tl4.to('.text-area-hover2',{
    width:'100%'
}) 
