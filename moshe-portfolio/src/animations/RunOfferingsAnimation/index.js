import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

const RunOfferingsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const headerElem = document.querySelector("#offerings header h1 span");
  const hiddenTextLower = gsap.utils.toArray("#offerings header span");
  const hiddenTextUpper = gsap.utils.toArray("#offerings p span");
  const imgElems = gsap.utils.toArray(
    "#offerings .offering-item .img-container img"
  );

  let mm = gsap.matchMedia();

  mm.add("(min-width: 999.1px)", () => {
    gsap.to(headerElem, {
      autoAlpha: 1,
      duration: 2.5,
      ease: Power3,
      clipPath: "circle(100% at 50% 50%)",
      scrollTrigger: {
        trigger: headerElem,
        start: "top 85%",
        once: true,
      },
    });
    hiddenTextLower.forEach((text) => {
      gsap.to(text, {
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 100%",
          end: "top 95%",
          once: true,
        },
      });
    });
    hiddenTextUpper.forEach((text) => {
      gsap.to(text, {
        duration: 2,
        autoAlpha: 1,
        transform: "translateX(0)",
        scrollTrigger: {
          trigger: text,
          start: "top 100%",
          end: "top 95%",
          once: true,
        },
      });
    });
    imgElems.forEach((img) => {
      gsap.to(img, {
        autoAlpha: 1,
        ease: Power3,
        duration: 3,
        clipPath: "circle(100% at 50% 50%)",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "top 75%",
          once: true,
        },
        onStart: () => {
          VanillaTilt.init(img, {
            max: 20,
            speed: 400,
            perspective: 500,
          });
        },
      });
    });
  });

  mm.add("(max-width: 999px)", () => {
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
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 80%",
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
          start: "top 65%",
          end: "top 55%",
          once: true,
        },
      });
    });
    imgElems.forEach((img) => {
      gsap.to(img, {
        autoAlpha: 1,
        ease: Power3,
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 75%",
          once: true,
        },
      });
    });
  });
};

export default RunOfferingsAnimation;
