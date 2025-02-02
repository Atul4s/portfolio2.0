gsap.from("h1,h3,#page1 img,.icons,.avt_img img",{
    y:300,
    duration:2,
    Delay:1,
    opacity:0,
    stagger:0.4
    

})

gsap.from(".icons li",{
    y:50,
    duration:0.8,
    Delay:1,
    opacity:0,
    stagger:0.15
    

})

gsap.from(".title_image_container img",{
    x:100,
    duration:2,
    Delay:2,
    opacity:0,
  
    

})

const scroll = new LocomotiveScroll(
    {
        el:document.querySelector("#main"),
        smooth:true
    }
);


    
  
    
