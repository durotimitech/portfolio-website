export const sections = {
  HERO: "Hero",
  PROJECTS: "Projects",
  ABOUT: "About",
  CONNECT: "Connect",
};

export const externalLinks = {
  EMAIL: "durotimitech@gmail.com",
  GITHUB: "https://github.com/durotimitech",
  LINKEDIN: "https://www.linkedin.com/in/durotimi-mejabi/",
  CV: "https://drive.google.com/file/d/17heWV49P-n03XtDqPlOZCxXGWp3WFXI6/view?usp=sharing",
};

export const mySkills = [
  { name: "TypeScript", src: "/skills/typescript.svg" },
  { name: "NextJS", src: "/skills/nextjs.svg" },
  { name: "NodeJS", src: "/skills/nodejs.svg" },
  { name: "SASS", src: "/skills/sass.svg" },
  { name: "MongoDB", src: "/skills/mongodb.svg" },
  { name: "GSAP", src: "/skills/gsap.svg" },
  { name: "Figma", src: "/skills/figma.svg" },
];

export const allProjects = [
  {
    id: 0,
    title: "Designer Web Portfolio",
    demo: "/gifs/donald-portfolio-demo.gif",
    liveLink: "https://rebrand.ly/ebube-portfolio",
    github: "https://github.com/durotimitech/donald-portfolio",
    shortDesc:
      "This is a web portfolio for a designer client. They wanted a way to showcase their design skills and signal to potential employers that they were fit for the job.",
    desc: "This is a web portfolio for a designer client. They wanted a way to showcase their design skills and signal to potential employers that they were fit for the job. I was interested in this project because, the client required some animations on the site and I felt it would be a great avenue to finally get over my phobia of CSS 😅",
    technologiesUsed: [
      "NextJS ",
      "TypeScript ",
      "Framer Motion ",
      "Styled Components",
    ],
    lessonsLearned: [
      "Learned how to use styled components",
      "Incorporated animations using the framer motion library",
    ],
    improvements: [
      "Add more complex animations",
      "Incorporate some 3D renderings",
    ],
  },
  // { id: 0, title: "Oxymon Solutions" },
  // { id: 0, title: "ABC Farms" },
  // { id: 0, title: "Personal Website" },
];
