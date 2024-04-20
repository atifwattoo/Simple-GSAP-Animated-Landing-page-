var timeline = gsap.timeline();

timeline.from(".nav img, .nav ul li, .nav .nav-last", {
    y: -50,
    delay: 0.5,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
});

timeline.from(".main h1", {
    y:200,
    opacity: 0,
    stagger: 0.3,
})

timeline.from(".main img", {
    // scale: 0,
    // rotate: 40,
    opacity: 0,
    stagger: 0.3,
    // repeat:-1,
    // yoyo:1
    // rotate: 30,
});

timeline.from(".main h5", {
    scale:0,
    opacity:0,
});

timeline.to(".main h5", {
    y:30,
    repeat:-1,
    yoyo:-1,
    duration: 1,
})

