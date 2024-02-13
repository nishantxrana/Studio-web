function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll();

var crsr = document.querySelector(".cursor");
var main = document;
var vid = document.querySelector(".introv");
var crsrText = document.querySelector(".cursor h1");
var p3Button = document.querySelector(".p3-end-container button")
var bigcrsr;

main.addEventListener("mousemove",function(val){
    crsr.style.left = val.x  +"px";
    crsr.style.top = val.y  + 2 + "px";
    bigcrsr = function(value){
      crsr.style.left = val.x - value + "px";
      crsr.style.top = val.y - value + "px";

    }

})

vid.addEventListener("mouseenter",function(){
  crsr.style.height = "1.5vw";
  crsr.style.width = "5vw";
  crsr.style.borderRadius = "1vw";
  crsrText.style.display = "block";
  crsr.style.mixBlendMode = "normal";
  crsr.style.backgroundColor = "green";
  
})
vid.addEventListener("mouseleave",function(){
  crsr.style.height = "1vw";
  crsr.style.width = "1vw";
  crsr.style.borderRadius = "50%";
  crsrText.style.display = "none";
  crsr.style.mixBlendMode = "difference";
  crsr.style.backgroundColor = "crimson";
})

p3Button.addEventListener("mouseenter",function(){
  p3Button.style.backgroundColor = "crimson",
  p3Button.style.color = "#fff",
  p3Button.style.height = "8vw",
  p3Button.style.width = "8vw"


})
p3Button.addEventListener("mouseleave",function(){
  p3Button.style.backgroundColor = "white",
  p3Button.style.color = "#0f0d0d",
  p3Button.style.height = "12vw",
  p3Button.style.width = "12vw"


})

// page 5 animations

var val = document.querySelectorAll(".box-content");


val.forEach(function(data){
 var imageAdd =  data.getAttribute('data-image');
 
 data.addEventListener("mouseenter",function(){
  crsr.style.height = "20vw";
  crsr.style.width = "20vw";
  crsr.style.borderRadius = "0";
  crsr.style.transition = "width ease-in-out .5s, height ease-in-out .5s";
  crsr.style.transform = "translate(-50%,0)";
  crsr.style.backgroundImage =  `url(${imageAdd})`;
  main.style.cursor = "wait";
  // bigcrsr(160);
  


 })
 data.addEventListener("mouseleave",function(){
  crsr.style.height = "1vw";
  crsr.style.width = "1vw";
  crsr.style.borderRadius = "50%";
  crsr.style.transition = "all ease";
  crsr.style.backgroundImage =  "none";

  main.style.cursor = "none";
 })

})



// animating pink cover
var navbar = document.querySelector("nav");
var pinkcover = document.querySelector(".pinkCover");
var HOME = document.querySelector("#home");
var WORK = document.querySelector("#work");
var STUDIO = document.querySelector("#Studio");
var CONTACT = document.querySelector("#contact");
var allAnimationText = document.querySelectorAll('.aText');

// Function to animate navigation bar

function animagteNav(name){
  name.addEventListener("mouseenter",function(val){
    allAnimationText.forEach(function(ele){
      ele.textContent = `${name.textContent}`;
    })
    pinkcover.style.display = "block";
    navbar.style.backgroundColor = "pink";
    name.style.borderBottom = "solid 1px #fff";
    navbar.style.mixBlendMode = "normal";
    
  })
  name.addEventListener("mouseleave",function(val){
    pinkcover.style.display = "none";
    navbar.style.backgroundColor = "#0f0d0d";
    name.style.borderBottom = "none";
    navbar.style.mixBlendMode = "difference";
  })
}
animagteNav(HOME);
animagteNav(WORK);
animagteNav(STUDIO);
animagteNav(CONTACT);



// prankinnnngggggg

var navButton = document.querySelector(".nav-button");
var rickSir = document.querySelector(".ricksir");
var rickvideo = document.querySelector(".ricksir video")
var rickaudio = document.querySelector(".ricksir audio")


navButton.addEventListener("mouseenter",function(){
  rickSir.style.display = "block";
  rickvideo.play();
  rickvideo.currentTime = 0;
  rickaudio.play();
  rickaudio.currentTime = 0;
  navbar.style.backgroundColor = "pink";
  navbar.style.mixBlendMode = "normal";
  
  
})
navButton.addEventListener("mouseleave",function(){
  navbar.style.backgroundColor = "#0f0d0d";
  rickSir.style.display = "none";
  rickvideo.pause();
  navbar.style.mixBlendMode = "difference";
  rickaudio.pause();
  
})
 






















var timeL = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page1 h1",
    start:"top 25%",
    end:"top 0",
    // markers:true,
    scrub:2
  }
})

timeL.to(".page1 h1",{
  x:-100,
  
},"page1")

timeL.to(".page1 h2",{
  x:90
  
},"page1")

timeL.to(".page1 video", { 
  width: "90%",
   ease: "none" 
},"page1")

var timeL2 = gsap.timeline({

  scrollTrigger:{
    scroller:'.main',
    trigger:'.main',
    start:"top -110%",
    end:"top -125%",
    // markers:true,
    scrub:2
  }
})

timeL2.to(".main",{
  backgroundColor:'#fff'
})

var timeL3 = gsap.timeline({

  scrollTrigger:{
    scroller:'.main',
    trigger:'.main',
    start:"top -260%",
    end:"top -280%",
    // markers:true,
    scrub:2
  }
})

timeL3.to(".main",{
  backgroundColor:"#0f0d0d",
  
},'page3')
timeL3.to("#p3-text-shift",{
  color:"#fff"
},'page3')
