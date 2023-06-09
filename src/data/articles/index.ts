interface Articles {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  tag: Array<string>;
}

function idGenerator(): number {
  return Math.floor(Math.random() * 100000);
}

export const Articles: Array<Articles> = [
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/code-refrence.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/torank.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/garn21.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/svelte.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/code-refrence.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/torank.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/garn21.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
  {
    id: idGenerator(),
    title: "How to Optimizetion Front-End Codes ?!",
    imgSrc: "src/assets/articles/svelte.jpg",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    tag: ["Technology", "Front-End"],
  },
];

export function getAll(): Array<Articles> {
  return Articles;
}
export function slice(limit: number): Array<Articles> {
  return Articles.slice(0, limit);
}
