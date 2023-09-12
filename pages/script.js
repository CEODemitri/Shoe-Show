// const items = document.querySelectorAll('.shoe');

// items.forEach((item) => {
//   gsap.to(item, { duration: 1, x: 100 });
// });

// not wat i need
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.shoe',
//     start: '-200% center',
//     end: '200% center',
//     scrub: true,
//     toggleActions: 'play reverse play reverse',
//   }
// })
gsap.set(".shoe1", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe1", {
  scrollTrigger: {
    trigger: ".a",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: 300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe2", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe2", {
  scrollTrigger: {
    trigger: ".b",
    start: "top top",
    end: "+=50",
    scrub: 1,
  },
  x: -300,
  duration: 4,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe3", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe3", {
  scrollTrigger: {
    trigger: ".c",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: 300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe4", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe4", {
  scrollTrigger: {
    trigger: ".d",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: -300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe5", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe5", {
  scrollTrigger: {
    trigger: ".e",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: 300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe6", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe6", {
  scrollTrigger: {
    trigger: ".f",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: -300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe7", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe7", {
  scrollTrigger: {
    trigger: ".g",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: 300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe8", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe8", {
  scrollTrigger: {
    trigger: ".h",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: -300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe9", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe9", {
  scrollTrigger: {
    trigger: ".i",
    start: "top top",
    end: "+=40",
    scrub: 1,
  },
  x: 300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

gsap.set(".shoe10", {
  opacity: 1,
  scale: 1,
});
gsap.from(".shoe10", {
  scrollTrigger: {
    trigger: ".j",
    start: "top top%",
    end: "+=40",
    scrub: 1,
  },
  x: -300,
  duration: 2,
  opacity: 0,
  scale: 0.7,
});

// method --target -- variable
gsap.to(".test", {
  scale: 0.5,
  duration: 3.5,
  x: 290,
  rotation: 360,
  repeat: -2,
  yoyo: true,
  fill: "rgb(255,255,255)",
});
