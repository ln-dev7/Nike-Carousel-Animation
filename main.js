import gsap from "gsap";
import "./style.scss";

const ease = "elastic.out(1,0.85)";
const duration = 2;

const descriptions = document.querySelectorAll(".description");
const backgrounds = document.querySelectorAll(".background");

const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

let current = 0;

arrowNext.addEventListener("click", () => {
  current++;
  if (current > descriptions.length - 1) current = 0;
  update();
});

arrowPrev.addEventListener("click", () => {
  current--;
  if (current < 0) current = descriptions.length - 1;
  update();
});

function update() {
  descriptions.forEach((title, index) => {
    gsap.to(title, {
      duration: duration,
      ease: ease,
      y: `${current * -220}px`,
    });
  });
  backgrounds.forEach((background, index) => {
    gsap.to(background, {
      duration: 0.5,
      x: `${current * -100}%`,
    });
  });
  switch (current) {
    case 0:
      gsap.to(".title", {
        duration: duration,
        ease: ease,
        color: "#000",
      });
      gsap.to(".nike-1", {
        duration: duration,
        ease: ease,
        x: "0",
        rotate: -40,
        scale: 1,
        opacity: 1,
      });
      gsap.to(".nike-2", {
        duration: duration,
        ease: ease,
        x: "0",
        rotate: 0,
        scale: 0,
        opacity: 0,
      });
      gsap.to(".nike-3", {
        duration: duration,
        ease: ease,
        x: "0",
        scale: 0,
        rotate: 0,
        opacity: 0,
      });
      break;
    case 1:
      gsap.to(".title", {
        duration: duration,
        ease: ease,
        color: "rgba(234, 253, 188, 0.50)",
      });
      gsap.to(".nike-1", {
        duration: duration,
        ease: ease,
        x: "-200%",
        rotate: 0,
        scale: 0,
        opacity: 0,
      });
      gsap.to(".nike-2", {
        duration: duration,
        ease: ease,
        x: "0",
        scale: 1,
        rotate: -40,
        opacity: 1,
      });
      gsap.to(".nike-3", {
        duration: duration,
        ease: ease,
        x: "0",
        scale: 0,
        rotate: 0,
        opacity: 0,
      });
      break;
    case 2:
      gsap.to(".title", {
        duration: duration,
        ease: ease,
        color: "#FAADAA",
      });
      gsap.to(".nike-1", {
        duration: duration,
        ease: ease,
        x: "-200%",
        rotate: 0,
        scale: 0,
        opacity: 0,
      });
      gsap.to(".nike-2", {
        duration: duration,
        ease: ease,
        x: "-200%",
        rotate: 0,
        scale: 0,
        opacity: 0,
      });
      gsap.to(".nike-3", {
        duration: duration,
        ease: ease,
        x: "0",
        scale: 1,
        rotate: -40,
        opacity: 1,
      });
      break;
  }
}
