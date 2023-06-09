interface Technology {
  techName: string;
  techSourceLink: string;
  techImage: string;
}

let techUrlHandler = (name: string) => {
  let baseURL = "./src/assets/technologys";
  return `${baseURL}/${name}`;
};

export const technologys: Technology[] = [
  {
    techName: "React",
    techSourceLink: "https://reactjs.org/",
    techImage: techUrlHandler("react.svg"),
  },
  {
    techName: "Vue.js",
    techSourceLink: "https://vuejs.org/",
    techImage: techUrlHandler("vue.svg"),
  },
  {
    techName: "Svelte",
    techSourceLink: "https://svelte.dev/",
    techImage: techUrlHandler("svelte.svg"),
  },
  {
    techName: "Nuxt.js",
    techSourceLink: "https://nuxtjs.org/",
    techImage: techUrlHandler("nuxt.svg"),
  },
  {
    techName: "NodeJs",
    techSourceLink: "https://nodejs.org/en",
    techImage: techUrlHandler("node.svg"),
  },
  {
    techName: "Npm",
    techSourceLink: "https://www.npmjs.com/",
    techImage: techUrlHandler("npm.svg"),
  },
  {
    techName: "Tailwindcss",
    techSourceLink: "https://tailwindcss.com/",
    techImage: techUrlHandler("tailwindcss.svg"),
  },
  {
    techName: "Bootstrap",
    techSourceLink: "https://getbootstrap.com/",
    techImage: techUrlHandler("bootstrap.svg"),
  },
  {
    techName: "Sass",
    techSourceLink: "https://sass-lang.com/",
    techImage: techUrlHandler("sass.svg"),
  },
  {
    techName: "Html",
    techSourceLink: "https://www.w3schools.com/html/",
    techImage: techUrlHandler("html.svg"),
  },
  {
    techName: "Git",
    techSourceLink: "https://git-scm.com/",
    techImage: techUrlHandler("git.svg"),
  },
  {
    techName: "GitHub",
    techSourceLink: "https://github.com/",
    techImage: techUrlHandler("github.svg"),
  },
  {
    techName: "MySQL",
    techSourceLink: "https://www.mysql.com/de/",
    techImage: techUrlHandler("mysql.svg"),
  },
];
