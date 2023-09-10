const items = document.querySelectorAll('.shoe');

items.forEach((item) => {
  gsap.to(item, { duration: 1, x: 100 });
});

// method --target -- variable
gsap.to(".test", { 
    scale: 0.5,
    duration: 2.5,
    x: 250,
    rotation: 360 
})