gsap.to("#page",{
    scrollTrigger:{
        trigger:`.beech-ki-image`,
        start:`top 20%`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scrub:.5
    }
})


var haka = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top 70%`,
        end:`50% 60%`,
        // markers:true,
        scrub:.5
    }
})

haka.from("#page1>h1",{
    y:100,
    opacity:0
})
.from("#page1>h5",{
    y:100,
    opacity:0
})


var main = document.querySelector(".rom-rom");

var circle = document.querySelector(".real")


main.addEventListener("mousemove",function(dets){
    requestAnimationFrame(()=>{
    circle.style.left = dets.clientX - main.getBoundingClientRect().left  + "px"
    circle.style.top = dets.clientY - main.getBoundingClientRect().top + "px"
    })
})

main.addEventListener("mouseleave",function(){
    circle.style.left = `0%`
    circle.style.top = `20%`
})