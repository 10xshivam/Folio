import React from "react";

const skills = [
    { name: "C++" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Prisma" },
    { name: "Drizzle" },
    { name: "Appwrite" },
    { name: "Docker" },
    { name: "AWS (ECR, ECS, CloudFront)" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Figma" },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="text-xs font-semibold flex items-start gap-1.5 text-gray-300 hover:text-gray-50 border p-2 rounded-lg border-gray-800 font-mono"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
