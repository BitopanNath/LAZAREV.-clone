function navAnimation(){
    var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",( )=>{
    let tl= gsap.timeline()

   tl.to("#nav-bottom",{
    height:"12vw",
   })
   tl.to(".nav-part2 h5",{
    display:"block"
   })
   tl.fromTo(".nav-part2 h5 span",
    {opacity:"0",y:0},
    {
    y:10,
    opacity : "100",
    duration:.1,
    stagger:0.1,
   })
})

nav.addEventListener("mouseleave",()=>{
    // gsap.to("#nav-bottom",{
    //     height:"0",
    // })
    // gsap.set(".nav-part2 h5",{
    //     display: "none"
    // })
    let tl =gsap.timeline();
    tl.to(".nav-part2 h5 span",
        
        {
            y:25,
            stagger:{amount:0.2},
            display:"none",
            duration:0.1,
        }
    )
    tl.to("#nav-bottom",{
        height:"0vw",
        diration:0.2
    })

})
}

function page2Animation(){
    var relems = document.querySelectorAll(".right-elem");
relems.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",()=>{
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",(dots)=>{
    gsap.to(elem.childNodes[3],{
        cursor:"none",
        x:dots.x-elem.getBoundingClientRect().x-50,
        y:dots.y-elem.getBoundingClientRect().y-150
    })
    })
})
}
function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
navAnimation()
page2Animation()
page3VideoAnimation()