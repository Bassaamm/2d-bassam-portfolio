export enum ProjectStatusEnum {
  production = "Production",
  locally = "Locally",
  databaseKeys = "DatabaseKeys",
}

export type ProjectType = {
  title: string;
  isLink: boolean;
  link?: string;
  status: ProjectStatusEnum;
  tools: {
    src: string;
    alt: string;
    name: string;
    width?: number;
    height?: number;
  }[];
  description: string[];
};

export const projects: ProjectType[] = [
  {
    title: "StuClubs",
    isLink: true,
    link: "https://stuclubs.com",
    status: ProjectStatusEnum.production,
    tools: [
      { src: "/images/nextjs-logo1.png", alt: "Next.js Logo", name: "Nextjs" },
      {
        src: "/images/tailwindcss.png",
        alt: "Tailwindcss Logo",
        name: "Tailwindcss",
      },
      { src: "/images/nestjs-logo.png", alt: "Nestjs Logo", name: "Nestjs" },
    ],
    description: [
      "- Inspired by university challenges: StuClubs was designed to address issues faced in university clubs, creating a seamless solution for collaboration",
      "- Front-end development: Built the entire front-end for web and some of the mobile interfaces, ensuring a user-friendly and responsive experience",
      "- Multi-subdomain support and customization: Enabled each club to have its unique subdomain with tools for designing custom forms",
      "- Daily usage and robust management: StuClubs is actively used by many users to manage forms, committees, members, and settings via its web app and mobile app",
    ],
  },
  {
    title: "GDSC Mobile App",
    isLink: true,
    link: "https://apps.apple.com/sa/app/stuclubs/id6621180220",
    status: ProjectStatusEnum.production,
    tools: [
      {
        src: "/images/flutter-logo.png",
        alt: "Flutter Logo",
        name: "Flutter",
        width: 60,
        height: 70,
      },
      {
        src: "/images/supabase-logo.png",
        alt: "Supabase Logo",
        name: "Supabase",
        width: 60,
        height: 70,
      },
      {
        src: "/images/stacked-logo.png",
        alt: "Stacked Logo",
        name: "Stacked",
        width: 60,
        height: 70,
      },
    ],
    description: [
      "- Flutter application to facilitate seamless communication among GDSC members and automate various work processes",
      "- Streamlined HR functions such as managing hours requests and prompted notifications for upcoming events",
      "- Included features like event registration, timeline with likes and comments, and leaderboard to track the highest member hours",
    ],
  },
  {
    title: "Cabins Life",
    isLink: true,
    link: "https://cabin-kohl.vercel.app",
    status: ProjectStatusEnum.databaseKeys,
    tools: [
      {
        src: "/images/react-logo.png",
        alt: "React Logo",
        name: "React",
        width: 60,
        height: 70,
      },
      {
        src: "/images/tailwindcss.png",
        alt: "Tailwindcss Logo",
        name: "Tailwindcss",
        width: 60,
        height: 70,
      },
      {
        src: "/images/supabase-logo.png",
        alt: "Supabase Logo",
        name: "Stacked",
        width: 60,
        height: 70,
      },
    ],
    description: [
      "- Web-based application that simplifies cabin reservation management",
      "- Offers a user-friendly interface for tracking availability",
      "- Streamlines check-in and check-out procedures for residents",
    ],
  },
  {
    title: "Type & Compile",
    isLink: true,
    link: "https://type-fast-compile-2.vercel.app/type",
    status: ProjectStatusEnum.locally,
    tools: [
      {
        src: "/images/react-logo.png",
        alt: "React Logo",
        name: "React",
        width: 60,
        height: 70,
      },
      {
        src: "/images/tailwindcss.png",
        alt: "Tailwindcss Logo",
        name: "Tailwindcss",
        width: 60,
        height: 70,
      },
      {
        src: "/images/expressjs-logo.png",
        alt: "Express Logo",
        name: "Expressjs",
        width: 60,
        height: 70,
      },
      {
        src: "/images/docker-logo.png",
        alt: "Docker Logo",
        name: "Docker",
        width: 100,
        height: 100,
      },
    ],
    description: [
      "- Funny and interactive typing game to improve typing speed and accuracy",
      "- It has an IDE to write code and compile it to see the output but it works only on locally",
    ],
  },
  {
    title: "Nomad",
    isLink: true,
    link: "https://github.com/Bassaamm/Nomad",
    status: ProjectStatusEnum.databaseKeys,
    tools: [
      {
        src: "/images/react-logo.png",
        alt: "React Logo",
        name: "React",
        width: 60,
        height: 70,
      },
      {
        src: "/images/tailwindcss.png",
        alt: "Tailwindcss Logo",
        name: "Tailwindcss",
        width: 60,
        height: 70,
      },
      {
        src: "/images/supabase-logo.png",
        alt: "Supabase Logo",
        name: "Stacked",
        width: 60,
        height: 70,
      },
    ],
    description: ["- trip destination bookmark application"],
  },

  {
    title: "Movie App",
    isLink: true,
    link: "https://movieaa.netlify.app",
    status: ProjectStatusEnum.production,
    tools: [
      {
        src: "/images/react-logo.png",
        alt: "React Logo",
        name: "React",
        width: 60,
        height: 70,
      },
      {
        src: "/images/tailwindcss.png",
        alt: "Tailwindcss Logo",
        name: "Tailwindcss",
        width: 60,
        height: 70,
      },
    ],
    description: [
      "- Movie app that shows the latest, popular, top rated and coming soon movies ",
    ],
  },
];
