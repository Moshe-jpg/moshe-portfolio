import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunOfferingsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const headerElem = document.querySelector("#offerings header h1 span");
  const hiddenTextLower = gsap.utils.toArray("#offerings header .from-lower");
  const hiddenTextUpper = gsap.utils.toArray("#offerings p .from-upper");

  //   const tl = gsap.timeline();

  let mm = gsap.matchMedia();

  mm.add("(max-width: 768px)", () => {
    gsap.to(headerElem, {
      duration: 1,
      autoAlpha: 1,
      transform: "translateY(0)",
      scrollTrigger: {
        trigger: document.querySelector("#offerings header"),
        start: "top 100%",
        end: "top 95%",
        once: true,
      },
    });

    hiddenTextLower.forEach((text) => {
      gsap.to(text, {
        duration: 3,
        autoAlpha: 1,
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 85%",
          once: true,
        },
      });
    });

    hiddenTextUpper.forEach((text) => {
      gsap.to(text, {
        duration: 1,
        autoAlpha: 1,
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 85%",
          once: true,
        },
      });
    });
  });
};

export default RunOfferingsAnimation;
