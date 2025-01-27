import { Link } from "react-router";
import { Separator } from "./ui/separator";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="bg-black w-full   font-big-shot px-8 py-16 min-h-screen text-white">
      <div className="mx-auto max-w-xl relative ">
        <Link
          to={"/"}
          className="md:text-4xl text-xl absolute top-0 -left-6 md:-left-36 cursor-pointer text-yellow-200"
        >
          {"<--"}back
        </Link>
        <div className="md:text-5xl text-4xl pt-20">Projects</div>
        <Separator className="my-6" color="white" />
        <div className="flex gap-8 flex-col">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              isLink={project.isLink}
              link={project.link}
              status={project.status}
              tools={project.tools}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
