import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

const Socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/codrshivam",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/10xshivam",
    icon: FiGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/shivamcodes_",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    url: "mailto:shivamdotwork@gmail.com",
    icon: MdMailOutline,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/15XnRuCUEL34LRhKwVzbJVBigLma8UmS3/view",
    icon: TbFileCv,
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-5xl font-semibold tracking-tighter">
          Hello, I&apos;m Shivam{" "}
        </h1>
        <p className="text-lg ml-1 tracking-tight text-gray-500">
          Full Stack Developer | Cloud & DevOps Enthusiast
        </p>
      </div>
      <div className="flex gap-4 ">
        {Socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            className="transition-colors duration-300 flex items-center gap-2"
          >
            <span className="group flex items-center text-gray-300 hover:text-gray-50 border p-2 rounded-lg border-gray-800 hover:bg-gray-800/30">
              <social.icon
                size={20}
                className="hover:scale-110 transition-transform duration-300"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
