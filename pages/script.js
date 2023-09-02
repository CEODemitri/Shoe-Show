gsap.from(".shoe", {
    scrollTrigger: {
        trigger: ".box",
        ease: "back.out(1.7)",
        scrub: 1.5,
        markers: {
            startColor: "#000",
            endColor: "orange",
            fontSize: "16px",
            fontWeight: "bold",
            indent: 20
        },
        start: "top 50%",
        end: "+=300"
    },
    stagger: {amount: 0.1},
    scale: 0, duration: 1
})

// Replace this to make the shoes animate one by one