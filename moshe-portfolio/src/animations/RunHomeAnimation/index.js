import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunHomeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const tl = gsap.timeline();

  let mm = gsap.matchMedia();

  mm.add("(max-width: 768px)", () => {
    tl.to("#home  h1 span", {
      duration: 1.5,
      autoAlpha: 1,
      ease: Power3,
      transform: "translateY(0)",
    })
      .to("#home .home-header h2 span", {
        duration: 1,
        autoAlpha: 1,
        ease: Power3,
        transform: "translateY(0)",
      })
      .to("#home .home-header .container", 3, {
        autoAlpha: 1,
        ease: Power3,
      });
  });
};

export default RunHomeAnimation;
