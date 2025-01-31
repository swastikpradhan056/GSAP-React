// gsap.to("#box1", {
//   duration: 2,
//   x: 400,
//   y: 150,
//   backgroundColor: "#374738",
//   borderRadius: "50%",
//   ease: "bounce",
//   delay: 1,
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.to("#box2", {
//   duration: 2,
//   x: 400,
//   y: 300,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   ease: "bounce",
//   delay: 1,
// });
// gsap.from("#box2", {
//   duration: 2,
//   x: 400,
//   y: 150,
//   backgroundColor: "#374738",
//   borderRadius: "50%",
//   ease: "bounce",
//   delay: 1,
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.from("h1", {
//   duration: 2,
//   opacity: 0,
//   delay: 1,
//   y: 30,
//   stagger: 0.5,
// });

// gsap.to("#box1", {
//   x: 300,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   // yoyo: true,
// });

// gsap.to("#box1", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// gsap.to("#box2", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 2.5,
//   backgroundColor: "yellow",
// });
// gsap.to("#box3", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 4,
//   backgroundColor: "green",
// });

var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// tl.to("#box3", {
//   x: 400,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
