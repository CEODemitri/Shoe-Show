// const items = document.querySelectorAll('.shoe')

// items.forEach((item) => {
//     gsap.to(".shoe", {
//         scrollTrigger: {
//             trigger: ".container",
//             markers: {
//                 startColor: "#000",
//                 endColor: "orange",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 indent: 20
//             },
//             start: "top top",
//             end: "bottom +=400"
//         },
//         stagger: {amount: 0.1},
//         scale: 0, 
//         duration: 4
//     })

//     // Replace this to make the shoes animate one by one

// });

// method --target -- variable
gsap.to(".test", { 
    scale: 0.5,
    duration: 2.5,
    x: 250,
    rotation: 360 
})