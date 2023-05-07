import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunContactAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const tl = gsap.timeline();

  let mm = gsap.matchMedia();
  const lines = gsap.utils.toArray("#email form .inputBox-container .spacer");

  mm.add("(min-width: 999.1px)", () => {
  
    tl.to("#contact .contact-container", {
      duration: 1.5,
      transform: "translateX(0)",
      autoAlpha: 1,
    }).to("#contact .img-container", {
      duration: 1.75,
      transform: "translateX(0)",
      autoAlpha: 1,
    }, 0)

    lines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        width: "90%",
        scrollTrigger: {
          trigger: line,
          start: "top 95%",
          end: "top 90%",
          scrub: 2.5,
          once: true,
        },
      });
    });
  });

  mm.add("(max-width: 999px)", () => {
    tl.to("#contact .contact-container", {
      duration: 1.5,
      ease: Power3,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    }).to(
      "#contact .contact-form-header h2",
      {
        duration: 1.5,
        ease: Power3,
        transform: "translateY(0)",
      },
      0.5
    );

    gsap.to("#contact .moshe-emoji", {
      duration: 1,
      autoAlpha: 1,
      transform: "scale(1) translateY(0)",
      scrollTrigger: {
        trigger: "#contact .moshe-emoji",
        start: "top 85%",
        end: "top 75%",
        once: true,
      },
    });

    lines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        width: "90%",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "top 70%",
          scrub: 2.5,
          once: true,
        },
      });
    });
  });
};

export default RunContactAnimation;
