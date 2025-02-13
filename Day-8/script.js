function page1Animation() {
  let tl = gsap.timeline();

  // tl.from("nav h1, nav h4, nav button", {
  //   y: -30,
  //   duration: 1,
  //   delay: 0.6,
  //   stagger: 0.2,
  // });

  // gsap.from("nav h1", {
  //   y: -10,
  //   delay: 0.5,
  //   opacity: 0,
  //   duration: 0.8,
  // });
  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    delay: 1,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.4"
  );
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 svg",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
  tl.from(
    ".section1bottom img",
    {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 0.6,
    },
    "-=0.5"
  );
}
function page2Animation() {
  gsap.from(".services h3", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".services h3",
      scroller: "body",
      start: "top 50%",
    },
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.8,
    },
    "anim"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.8,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
}
page1Animation();
page2Animation();
