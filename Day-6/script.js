// function breakText() {
//   const h1 = document.querySelector("h1");

//   const h1Text = h1.innerText;

//   const splittedText = h1Text.split("");

//   let clutter = "";

//   splittedText.forEach((e) => {
//     clutter += `<span>${e}</span>`;
//   });

//   h1.innerHTML = clutter;
//   console.log(clutter);
// }
// breakText();

// gsap.from("h1 span", {
//   y: 50,
//   duration: 0.8,
//   stagger: 0.3,
//   ease: "back",
//   opacity: 0,
//   delay: 0.3,
//   scrub: 1,
// });

function breakText() {
  const h1 = document.querySelector("h1");

  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");

  const halfValue = Math.floor(splittedText.length / 2);

  let clutter = "";

  splittedText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakText();

gsap.from("h1 .a", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
