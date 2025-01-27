import { Link } from "react-router";
import ToolItem from "./ToolItem";
import { ProjectStatusEnum, ProjectType } from "@/constants/projects";
import { cn } from "@/lib/utils";

const projectStatus = {
  Production: "text-green-500 bg-green-900",
  Locally: "text-oragne-500 bg-orange-900",
  DatabaseKeys: "text-red-500 bg-red-900",
};

function ProjectCard({
  title,
  link,
  isLink,
  status,
  tools,
  description,
}: ProjectType) {
  const projectStatusTheme = projectStatus[status];
  console.log(status);
  console.log(ProjectStatusEnum.production);
  console.log(status === ProjectStatusEnum.production);
  return (
    <div className="border rounded-xl w-full inline-block border-white px-6 py-6">
      <div className="space-y-1 mb-4">
        <div className="flex items-center justify-between w-full">
          {isLink ? (
            <Link
              target="_blank"
              to={link ?? ""}
              className="text-blue-500 underline text-lg md:text-2xl"
            >
              {title}
            </Link>
          ) : (
            <p className="text-xl md:text-2xl">{title}</p>
          )}
          <p
            className={cn(
              "px-2 flex items-center gap-2 rounded-lg py-1 text-xs md:text-base",
              projectStatusTheme
            )}
          >
            <aside className="text-2xl md:text-4xl">•</aside>
            <p>
              {status === ProjectStatusEnum.production
                ? ProjectStatusEnum.production
                : status === ProjectStatusEnum.locally
                ? "works locally"
                : "Supabase keys"}
            </p>
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2 flex-col justify-center">
            <div className="flex gap-8 md:py-0 py-6 flex-wrap items-center">
              {tools.map((tool, index) => (
                <ToolItem
                  key={index}
                  src={tool.src}
                  alt={tool.alt}
                  height={tool.height}
                  width={tool.width}
                  name={tool.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="space-y-4">
          {description.map((des) => (
            <li>{des}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
