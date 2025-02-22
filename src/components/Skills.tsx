import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAppwrite,
  SiDrizzle,
  SiExpress,
  SiPostman,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  { name: "", icon: TbBrandCpp },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: BiLogoMongodb },
  { name: "PostgreSQL", icon: DiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Drizzle", icon: SiDrizzle },
  { name: "Appwrite", icon: SiAppwrite },
  { name: "Docker", icon: FaDocker },
  { name: "AWS (ECR, ECS, CloudFront)", icon: FaAws },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="text-xs font-semibold flex items-start gap-1.5 text-gray-300 hover:text-gray-50 border p-2 rounded-lg border-gray-800"
          >
            <skill.icon
              size={18}
              className="hover:scale-110 transition-transform duration-300 text-gray-400"
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
