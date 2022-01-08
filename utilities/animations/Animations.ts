/** Hero **/
// Cursor
// Write On

import { gsap, Power3 } from "gsap";

class Animations {
  fadeInUp = (element: any, delay?: number, duration?: number) => {
    gsap.from(element, {
      delay: delay || 0,
      ease: Power3.easeOut,
      duration: duration || 1,
      y: 60,
      opacity: 0,
    });
  };

  fadeInUpStaggered = (element: any, delay?: number) => {
    gsap.timeline().from(element.children, {
      delay: delay || 0,
      stagger: 0.3,
      ease: Power3.easeOut,
      duration: 2,
      y: 60,
      opacity: 0,
    });
  };

  fadeInUpStaggeredWithVisibility = (element: any, delay?: number) => {
    if (!element.style.visibility) {
      gsap
        .timeline()
        .to(element, { visibility: "visible" })
        .from(element.children, {
          delay: delay || 0,
          stagger: 0.3,
          ease: Power3.easeOut,
          duration: 2,
          y: 60,
          opacity: 0,
        });
    }
  };
}

export default new Animations();
