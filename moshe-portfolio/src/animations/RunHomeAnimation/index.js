import gsap, { Power3 } from "gsap";
import imagesLoaded from "imagesloaded";
import ScrollTrigger from "gsap/ScrollTrigger";

let isFirstLoad = true;
const firstThreeAnimations = gsap.timeline({ paused: true });
const otherAnimations = gsap.timeline({ paused: true });

const RunHomeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const content = document.querySelector("main");

  const imgLoad = imagesLoaded(content);

  // imgLoad.on("done", (instance) => {});

  let mm = gsap.matchMedia();

  mm.add("(min-width: 999.1px)", () => {
    imgLoad.on("done", () => {
      // Only run the first three animations once
      if (isFirstLoad) {
        firstThreeAnimations
          .to(".overlay", {
            duration: 0.3,
            background: "rgba(255, 255, 255, 0.15)",
          })
          .to(".loading", {
            autoAlpha: 0,
            duration: 1,
          })
          .to(".overlay", {
            y: "-100vh",
            duration: 1.5,
            stagger: 0.3,
            ease: Power3.easeOut,
            onComplete: () => {
              otherAnimations.play();
            },
          })
          .to(".overlay-container", {
            display: "none",
            duration: 0,
          });

        firstThreeAnimations.play();
        isFirstLoad = false;
      } else {
        // Reset and play the other animations every time
        otherAnimations
          .clear()
          .to("#home  h1 span", {
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
              transform: "translateY(0)",
            },
            "^0.1"
          )
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
          )
          // ...
          .play();
      }
    });
  });

  mm.add("(max-width: 999px)", () => {
    imgLoad.on("done", () => {
      if (isFirstLoad) {
        firstThreeAnimations
          .to(".overlay", {
            duration: 0.3,
            background: "rgba(255, 255, 255, 0.15)",
          })
          .to(".loading", {
            autoAlpha: 0,
            duration: 1,
          })
          .to(".overlay", {
            y: "-100vh",
            duration: 1.5,
            stagger: 0.3,
            onComplete: () => {
              otherAnimations.play();
            },
          })
          .to(".overlay-container", {
            display: "none",
            duration: 0,
          });

        firstThreeAnimations.play();
        isFirstLoad = false;
      } else {
        // Reset and play the other animations every time
        otherAnimations
          .clear()
          .to("#home  h1 span", {
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
          })
          // ...
          .play();
      }
    });
  });
};

export default RunHomeAnimation;
