import { gsap, Power3 } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

gsap.registerPlugin(TextPlugin, CSSRulePlugin);

class HeroAnimations {
  cursor = (element: any): void => {
    gsap.from(element, {
      duration: 0.4,
      repeat: -1,
      ease: Power3.easeInOut,
      opacity: 0,
    });
  };

  writeOn = (nameItem: any) => {
    const [hello, name, cursor] = nameItem.children;
    gsap
      .timeline({ delay: 1 })
      .to(hello, {
        text: "Hi There!",
        duration: 1.5,
      })
      .to(name, {
        text: " I'm Durotimi Mejabi.",
        duration: 4,
      });
  };

  imageReveal = (bgImage: any, element: any) => {
    gsap
      .timeline({ defaults: { duration: 1, delay: 6.3 } })
      .to(bgImage, { ease: Power3.easeInOut, width: "0%" })
      .to(element.children[0].children[0], {
        delay: -0.8,
        ease: Power3.easeOut,
        scale: 1.2,
        rotate: "0",
      });
  };
}

export default new HeroAnimations();
