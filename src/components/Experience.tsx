import { Link } from "react-router";
import { Separator } from "./ui/separator";
import ExperiencePhase from "./ExperiencePhase";

const misbahSkillSet = [
  { tool: "NextJS", color: "bg-slate-800" },
  { tool: "TailwindCSS", color: "bg-cyan-500" },
  { tool: "Firebase", color: "bg-yellow-500" },
  { tool: "localization", color: "bg-green-500" },
  { tool: "Typescript", color: "bg-blue-500" },
];
const responsibilities = [
  "Revamped the company website from HTML/CSS/JavaScript to the NextJS framework, improving performance",
  "Developed an admin dashboard to monitor and manage app activities efficiently",
  "Designed ER diagrams to support new features implementation",
  "Contributed to the development of the Misbah App",
];

export default function Experience() {
  return (
    <div className="bg-black w-full px-8 font-big-shot py-16 min-h-screen text-white">
      <div className="mx-auto max-w-xl relative ">
        <Link
          to={"/"}
          className="md:text-4xl text-xl absolute top-0 -left-6 md:-left-36 cursor-pointer text-yellow-200"
        >
          {"<--"}back
        </Link>
        <div className="md:text-4xl text-3xl pt-20">Experience</div>
        <Separator className="my-6" color="white" />
        <div className="space-y-14">
          {" "}
          <ExperiencePhase
            company="Misbah ai"
            position="Full-Stack Developer - Intern"
            skills={misbahSkillSet}
            responsibilities={responsibilities}
          />
        </div>
      </div>
    </div>
  );
}
