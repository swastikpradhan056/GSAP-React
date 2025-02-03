const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full", {
  duration: 0.3,
  right: 0,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.3,
  stagger: 0.25,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});
cross.addEventListener("click", () => {
  tl.reverse();
});
