import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

const RunContactAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const tl = gsap.timeline();

  let mm = gsap.matchMedia();
  const lines = gsap.utils.toArray("form .spacer");

  mm.add("(min-width: 999.1px)", () => {
    tl.to("#contact .contact-container", {
      duration: 1.5,
      transform: "translateX(0)",
      autoAlpha: 1,
      onComplete: () => {
        VanillaTilt.init(document.querySelector(".contact-container"), {
          max: 20,
          speed: 400,
          perspective: 500,
          glare: true,
          "max-glare": 1,
        });
      },
    })
      .to(
        "#contact form",
        {
          duration: 1.5,
          transform: "translateX(0)",
          autoAlpha: 1,
        },
        0
      )
      .to(lines, {
        duration: 0.5,
        width: "100%",
        stagger: 0.2,
      });
  });

  mm.add("(max-width: 999px)", () => {
    gsap.to("#contact .contact-container", {
      duration: 3.5,
      ease: Power3,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: document.querySelector("#contact .contact-container"),
        start: "top 80%",
        end: "top 70%",
        scrub: 2.5,
        once: true,
      },
    });

    lines.forEach((line) => {
      gsap.to(line, {
        duration: 2.5,
        autoAlpha: 1,
        width: "100%",
        scrollTrigger: {
          trigger: document.querySelector("#form"),
          start: "top 80%",
          end: "top 60%",
          scrub: 2.5,
          once: true,
        },
      });
    });
  });
};

export default RunContactAnimation;
