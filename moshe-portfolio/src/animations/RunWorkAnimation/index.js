import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

const RunWorkAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const headerElem = document.querySelector("#work header h1");
  const descHeaders = gsap.utils.toArray("#work .desc-container .bg-container");
  const imgElems = gsap.utils.toArray("#work .img-container img");
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

    descHeaders.forEach((descHeader) => {
      gsap.to(descHeader, {
        duration: 2.5,
        autoAlpha: 1,
        ease: Power3,
        rotate: "360deg",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: descHeader,
          start: "top 85%",
          end: "top 75%",
          once: true,
        },
        onStart: () => {
          VanillaTilt.init(descHeader, {
            max: 20,
            speed: 400,
            perspective: 500,
          });
        },
      });
    });

    imgElems.forEach((img) => {
      gsap.to(img, {
        duration: 2.5,
        ease: Power3,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "top 55%",
          once: true,
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
        trigger: headerElem,
        start: "top 90%",
        end: "top 80%",
        once: true,
      },
    });

    descHeaders.forEach((descHeader) => {
      gsap.to(descHeader, 2, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        rotate: "360deg",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: descHeader,
          start: "top 85%",
          end: "top 75%",
          once: true,
        },
      });
    });

    imgElems.forEach((img) => {
      gsap.to(img, {
        duration: 2.5,
        ease: Power3,
        clipPath: "circle(100% at 50% 50%)",
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          end: "top 55%",
          once: true,
        },
      });
    });
  });
};

export default RunWorkAnimation;
