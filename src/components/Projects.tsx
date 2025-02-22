import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "EchoForms - AI-Powered Form Builder",
    icon: "/echoforms.png",
    description:
      "EchoForms is an AI-powered SaaS for effortless form creation via prompts. It offers real-time analytics, email notifications, and seamless data export, making form management efficient and user-friendly.",
    technologies: [
      "Next.js, ",
      "Tailwind CSS, ",
      "Drizzle ORM, ",
      "PostgreSQL, ",
      "NeonDB, ",
      "Gemini API, ",
      "Clerk, ",
      "Zod, ",
      "Docker, ",
      "Razorpay, ",
      "Resend",
    ],
    liveLink:"https://echoforms.vercel.app/",
    github: "https://github.com/10xshivam/EchoForms",
  },
  {
    title: "Quick Report - Secure Incident Reporting",
    icon: "/quickreport.png",
    description:
      "Quick Report is a secure platform for anonymous incident reporting, leveraging AI and real-time location tracking to enhance accuracy and efficiency. Admins get a robust dashboard for report management.",
    technologies: [
      "Next.js, ",
      "Tailwind CSS, ",
      "React Hook Form, ",
      "Zod, ",
      "NextAuth, ",
      "Prisma ORM, ",
      "PostgreSQL, ",
      "NeonDB, ",
      "Gemini AI, ",
      "Here API, ",
      "Cloudinary, ",
      "Docker",
    ],
    liveLink: "https://quick-reportt.vercel.app/",
    github: "https://github.com/10xshivam/Quick-Report",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full bg-gray-800/50 p-3 rounded-lg flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <div className="p-0.5 border border-gray-800 rounded">
                  <Image
                    alt={project.title}
                    src={project.icon}
                    width={15}
                    height={15}
                  />
                </div>
                <span className="font-mono font-semibold text-gray-300 tracking-tight">
                  {project.title}
                </span>
              </div>
              <div className="flex gap-2 font-mono tracking-tighter text-sm">
                <Link href={project.liveLink} target="_blank">Live</Link>|
                <Link href={project.github} target="_blank">GitHub</Link>
              </div>
            </div>
            <p className="text-xs font-semibold font-mono text-gray-300">
              Tech Stack -{" "}
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="font italic text-gray-400 tracking-tighter font-medium"
                >
                  {technology}
                </span>
              ))}
            </p>
            <hr className="border-gray-700"/>
            <p className="text-sm text-gray-500 font-mono tracking-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
