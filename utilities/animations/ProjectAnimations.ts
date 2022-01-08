import { gsap, Power1 } from "gsap";

class ProjectAnimations {
  infiniteBounce = (element: any) => {
    gsap.from(element, {
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      y: 10,
    });
  };
}

export default new ProjectAnimations();
