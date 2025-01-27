import React from "react";

interface Skill {
  tool: string;
  color: string;
}

interface ExperienceItemProps {
  company: string;
  position: string;
  skills: Skill[];
  responsibilities: string[];
}

const ExperiencePhase: React.FC<ExperienceItemProps> = ({
  company,
  position,
  skills,
  responsibilities,
}) => {
  return (
    <div className="flex flex-col gap-6 md:gap-2">
      <div className="flex md:gap-8 md:flex-row gap-4  flex-col">
        <p className="text-2xl">{company}</p>
        <div className="flex gap-2 flex-wrap items-center">
          {skills.map((skill) => (
            <p
              className={`text-sm px-2  py-0.5 rounded-lg ${skill.color}`}
              key={skill.tool}
            >
              {skill.tool}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="position text-sm">{position}</div>
        <div className="description">
          <ul className="list-disc list-inside space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li className="pl-4" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePhase;
