import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunFooterAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const footerElem = document.querySelector(".footer-component");
  const footerStatement = document.querySelector(
    ".footer-component .footer-statement-container"
  );

  let mm = gsap.matchMedia();

  mm.add("(min-width: 999.1px)", () => {
    gsap.to(footerElem, {
      autoAlpha: 1,
      duration: 3,
      ease: Power3,
      clipPath: "circle(100% at 50% 50%)",
      scrollTrigger: {
        trigger: footerElem,
        start: "top 90%",
        once: true,
      },
    });
     gsap.to(footerStatement, {
       autoAlpha: 1,
       duration: 1,
       ease: Power3,
       transform: "translateY(0)",
       scrollTrigger: {
         trigger: footerElem,
         start: "top 88%",
         once: true,
       },
     });
  });

  mm.add("(max-width: 999px)", () => {
    gsap.to(footerElem, {
      autoAlpha: 1,
      duration: 2,
      ease: Power3,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: footerElem,
        start: "top 90%",
        once: true,
      },
    });
    gsap.to(footerStatement, {
      autoAlpha: 1,
      duration: 2,
      ease: Power3,
      transform: "translateY(0)",
      scrollTrigger: {
        trigger: footerElem,
        start: "top 88%",
        once: true,
      },
    });
  });
};

export default RunFooterAnimation;
