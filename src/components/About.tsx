import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">About</h2>
      <div className="w-full bg-gray-800/50 p-3 rounded-lg">
        <p className="text-sm text-gray-400 font-mono">
          Hi, I’m Shivam, a Full-Stack Developer focused on building scalable
          and efficient web applications. I specialize in Next.js, React,
          Express.js, PostgreSQL, and MongoDB, with expertise in cloud services
          like Docker and AWS (ECR, ECS, CloudFront) for optimized deployment. I
          continuously explore new technologies to enhance performance and
          functionality. Committed to growth, I strive to build solutions that
          drive real-world impact.
        </p>
      </div>
    </div>
  );
}
