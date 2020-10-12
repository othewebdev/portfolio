// This JS document will control the animations in the DOM

// making new timeline var 'el' // we will chain animations 
// we will use gsaps function timeline using the CDN from GSAP in our HTML file
// gsap.time({defaults { animation: 'animation.name'}})
const tl = gsap.timeline({ defaults: { ease: "expo.out" } });


// grabs our element as firs tparam, and our anim as the other

// ALL ANIMATIONS (ON DOCUMENT START)
tl.to('.text', { y: '0%', duration: .55, scale: .98 })
    // SLIDERS
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.25 })
tl.to('.slider2', { y: '-100%', duration: 1.45 }, "-=1.25")
tl.to('.slider3', { y: '-100%', duration: 1.3 }, "-=1.3")
    // INTRO
tl.to('.intro', { y: '-100%', duration: 0.5 }, "-=1.4") //'-=1' makes its start 1 sec faster
tl.to('.landing-text', { opacity: '100%', duration: 3.5, scale: 1.2 })
tl.to('.menu-toggler', { opacity: '100%', duration: 1.5, }, "-=2.4")