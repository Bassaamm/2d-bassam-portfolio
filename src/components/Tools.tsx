import { Link } from "react-router";
import { Separator } from "./ui/separator";

enum ToolsTypeEnum {
  frontEnd = "Front-end Development",
  backEnd = "Back-end Development",
  mobile = "Mobile Development",
  other = "Other",
}

const tools: {
  toolType: ToolsTypeEnum;
  tool: { logo: string; name: string; width?: number; height?: number }[];
}[] = [
  {
    toolType: ToolsTypeEnum.frontEnd,
    tool: [
      {
        logo: "/public/images/html-logo.png",
        name: "HTML",
        height: 75,
        width: 75,
      },
      { logo: "/public/images/css-logo.png", name: "CSS" },
      { logo: "/public/images/sass-logo.png", name: "Sass" },
      { logo: "/public/images/ts-logo.png", name: "TypeScript" },
      { logo: "/public/images/react-logo.png", name: "React" },
      { logo: "/public/images/angluar-logo.png", name: "Angular" },
      { logo: "/public/images/nextjs-logo1.png", name: "Nextjs" },
      { logo: "/public/images/threejs-logo.png", name: "Threejs" },
      { logo: "/public/images/react-logo.png", name: "React Three Fiber" },
      { logo: "/public/images/tailwindcss.png", name: "TailwindCss" },
    ],
  },
  {
    toolType: ToolsTypeEnum.backEnd,
    tool: [
      { logo: "/public/images/expressjs-logo.png", name: "Expressjs" },
      { logo: "/public/images/nestjs-logo.png", name: "Nestjs" },
      { logo: "/public/images/springboot-logo.png", name: "Spring boot" },
    ],
  },
  {
    toolType: ToolsTypeEnum.mobile,
    tool: [
      { logo: "/public/images/react-logo.png", name: "React Native" },
      { logo: "/public/images/flutter-logo.png", name: "Flutter" },
    ],
  },
  {
    toolType: ToolsTypeEnum.other,
    tool: [
      { logo: "/public/images/docker-logo.png", name: "Docker" },
      { logo: "/public/images/kubernetes-logo.png", name: "Kubernetes" },
      { logo: "/public/images/supabase-logo.png", name: "Supabase" },
    ],
  },
];

export default function Tools() {
  return (
    <div className="bg-black w-full px-10 font-big-shot p-16 min-h-screen text-white">
      <div className="mx-auto md:max-w-4xl relative">
        <Link
          to={"/"}
          className="md:text-4xl text-xl absolute top-0 -left-6 md:-left-36 cursor-pointer text-yellow-200"
        >
          {"<--"}back
        </Link>
        <div className="md:text-4xl text-3xl pt-20">Technologies</div>
        <Separator className="my-6" color="white" />
        <div className="flex gap-8 flex-col">
          {tools.map((tool) => (
            <div className="space-y-4" key={tool.toolType}>
              <div className="md:text-4xl text-lg">{tool.toolType}:</div>
              <div className="flex w-full   md:px-0 px-4 items-center gap-12 md:gap-4 flex-wrap">
                {tool.tool.map((t, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center text-center w-[100px] md:w-[160px]"
                  >
                    <img
                      className="w-28 h-28 object-contain"
                      src={t.logo}
                      alt={t.name}
                    />
                    <div className="text-xl">{t.name}</div>
                  </div>
                ))}
              </div>
              <Separator className="my-6" color="white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
