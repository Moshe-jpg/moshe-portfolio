import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunHomeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const tl = gsap.timeline();

  let mm = gsap.matchMedia();

  mm.add("(min-width: 999.1px)", () => {
    tl.to("#home  h1 span", {
      duration: 2.5,
      autoAlpha: 1,
      ease: Power3,
      transform: "rotate3d(1, 1, 1, 0deg) scale(2.5)",
    })
      .to("#home  h1 span", {
        duration: 0.75,
        ease: Power3,
        transform: "scale(.8) translateY(-110%)",
      })
      .to("#home  h1 span", {
        visibility: "hidden",
        duration: 0.01,
        transform: "translateY(110%)",
      })
      .to("#home  h1 span", {
        visibility: "visible",
        duration: 1.5,
        ease: Power3,
        transform: "scale(1) translateY(0)",
      })
      .to(
        "#home .home-header h2 span",
        {
          duration: 1,
          autoAlpha: 1,
          ease: Power3,
          transform: "translateX(-200%)",
        },
        "^0.1"
      )
      .to("#home .home-header h2 span", {
        duration: 0.0001,
        visibility: "hidden",
        transform: "translateX(200%)",
      })
      .to("#home .home-header h2 span", {
        duration: 1,
        autoAlpha: 1,
        transform: "translateX(0)",
      })
      .to("#home .home-header .container .first-text", {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
      })
      .to(
        "#home .home-header .container .second-text",
        {
          autoAlpha: 1,
          ease: Power3,
        },
        "^.3"
      );
  });

  mm.add("(max-width: 999px)", () => {
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
