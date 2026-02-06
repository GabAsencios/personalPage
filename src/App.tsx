"use client";

import "./App.css";
import React from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { MagicCard } from "@/components/ui/magic-card.tsx";

import { Linkedin, FileText, Mail } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiPytorch,
  SiMysql,
  SiJupyter,
  SiGooglecolab,
  SiWireshark,
  SiMongodb,
  SiTypescript,
  SiAmazonwebservices
} from "react-icons/si";

import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type IconProps = React.HTMLAttributes<SVGElement>;


import {HomeIcon} from '@/components/ui/home';

import { GridPattern } from "@/components/ui/grid-pattern"


export function App() {
  return (
    
    <main className="snap-container relative overflow-hidden">
      <GridPattern className="fill-blue-300/10 stroke-blue-300/20 dark:fill-orange-200/10 dark:stroke-orange-200/20 [mask-image:linear-gradient(to_bottom_right,white,transparent)] fixed inset-0 h-screen w-screen" />

       <div className="dashboard-container relative z-10">
        <DockDemo />
        <AnimatedThemeToggler className="fixed top-4 right-4 z-50" />
        </div>
        
      <div className="home-button-container">
      <InteractiveHoverButton onClick={() => scrollToSection("main-section")}><HomeIcon>
      </HomeIcon></InteractiveHoverButton>
    </div>
      {/* SECTION 1: HERO */}
      <section id="main-section" className="main-section relative z-10">
        {/* <img className="selfie-pic" src="/" alt="selfie" /> */} 
          <h1 className="mb-6 !text-6xl font-bold text-heading md:!text-8xl lg:!text-[100px]" style={{ fontFamily: 'DM-sans, sans-mono' }}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gabriel</span>
          </h1>
        <ButtonPages/>
        
      </section>
      {/* SECTION 2: ABOUT*/}
      <section id="about-section" className="about-section justify-center min-h-screen w-full flex flex-col items-center gap-8 relative z-10">
        <h1 className="mb-6 text-3xl font-bold text-heading md:text-5xl lg:text-6xl" style={{ fontFamily: 'DM-sans, sans-mono' }}>
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span></h1>
        <CardBio/>
      </section>
      {/* SECTION 3: PROJECTS */}
      <section id="projects-section" className="projects-section justify-center min-h-screen w-full flex flex-col items-center gap-8 relative z-10">
        <h1 className="mb-6 text-3xl font-bold text-heading md:text-5xl lg:text-6xl" style={{ fontFamily: 'DM-sans, sans-mono' }}>
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span></h1>
        <div className="card-container flex flex-row gap-8 justify-center">

          <ProjectGallery />
          
        </div>

      </section>
      {/* SECTION 4: SKILLS */}
      <section
        id="skills-section"
        className="skills-section min-h-screen w-full flex flex-col items-center justify-center gap-8 relative z-10">
        <h1 className="mb-1 text-3xl font-bold text-heading md:text-5xl lg:text-6xl" style={{ fontFamily: 'DM-sans, sans-mono' }}>
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span></h1>
          <p className="text-lg mb-4" style={{ fontFamily: 'DM-sans, sans-serif' } }>Hover Over A Skill For My Current Proficiency</p>
        <SkillsGrid />
      </section>
      {/* SECTION 5: CONTACT */}
      <section
        id="contact-section"
        className="skills-section min-h-screen w-full flex flex-col items-center justify-center gap-8 relative z-10">
        <h1 className="mb-6 text-3xl font-bold text-heading md:text-5xl lg:text-6xl" style={{ fontFamily: 'DM-sans, sans-mono' }}>
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span></h1>
        <ContactCard />
      </section>
    </main>
  );
}


// Helper Functions and Component calls


function DockDemo() {
  const [copied, setCopied] = React.useState(false);

  const handleEmailCopy = () => {
    const email = "gabriel.asencios98@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="dock-container">
    <Dock direction="top" iconMagnification={60} iconDistance={30} >
      <DockIcon className="bg-black/15 dark:bg-white/20" title="GitHub">
        <a href="https://github.com/GabAsencios" target="_blank" rel="noopener noreferrer">
          <Icons.gitHub className="size-6" />
        </a>
      </DockIcon>
      <DockIcon className="bg-black/15 dark:bg-white/20" title="LinkedIn">
        <a href="https://www.linkedin.com/in/gabriel-asencios-3133b0349" target="_blank" rel="noopener noreferrer">
          <Linkedin className="size-6" />
        </a>
      </DockIcon>
      <DockIcon className="bg-black/15 dark:bg-white/20" title="Open Resume">
        <a href="Resume_ML.pdf" target="_blank" rel="noopener noreferrer">
          <FileText className="size-6" />
        </a>
      </DockIcon>
      <DockIcon className="bg-black/15 dark:bg-white/20" title="Copy email">
        <button 
          onClick={handleEmailCopy}
          className="cursor-pointer focus:outline-none"
          title={copied ? "Email copied!" : "Copy email"}
        >
          <Mail className="size-6" />
        </button>
        {copied && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium z-50">
            Email copied to clipboard!
          </div>
        )}
      </DockIcon>
    </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

// Button to page section scroll function
const scrollToSection = (className: string) => {
  const element = document.getElementById(className);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function ButtonPages() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-3">
        <InteractiveHoverButton
          onClick={() => scrollToSection("about-section")}
        >
          {" "}
          About{" "}
        </InteractiveHoverButton>
        <InteractiveHoverButton
          onClick={() => scrollToSection("projects-section")}
        >
          {" "}
          Projects{" "}
        </InteractiveHoverButton>
        <InteractiveHoverButton
          onClick={() => scrollToSection("skills-section")}
        >
          {" "}
          Skills{" "}
        </InteractiveHoverButton>
        <InteractiveHoverButton
          onClick={() => scrollToSection("contact-section")}
        >
          {" "}
          Contact{" "}
        </InteractiveHoverButton>
      </div>
    </div>
  );
}


// Skills Grid Component
function SkillsGrid() {
  const skills = [
    { id: 0, icon: FaJava, name: "Java 90%" },
    { id: 1, icon: SiPython, name: "Python 85%" },
    { id: 2, icon: SiJavascript, name: "JavaScript 75%" },
    { id: 3, icon: SiHtml5, name: "HTML 85%" },
    { id: 4, icon: SiCss3, name: "CSS 80%" },
    { id: 5, icon: SiCplusplus, name: "C++ 75%" },
    { id: 6, icon: SiReact, name: "React 80%" },
    { id: 7, icon: SiMongodb, name: "MongoDB 80%" },
    { id: 8, icon: SiNodedotjs, name: "Node.js 70%" },
    { id: 9, icon: SiPytorch, name: "PyTorch 90%" },
    { id: 10, icon: SiAmazonwebservices, name: "AWS 70%" },
    { id: 11, icon: SiMysql, name: "MySQL 80%" },
    { id: 12, icon: SiJupyter, name: "Jupyter 80%" },
    { id: 13, icon: SiGooglecolab, name: "Google Colab 80%" },
    { id: 14, icon: SiWireshark, name: "Wireshark 75%" },
    { id: 15, icon: SiTypescript, name: "TypeScript 70%" },
    
    
  ];

  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <skill.icon className="skill-icon" />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

function ContactCard() {
  return (
    <div className="w-full max-w-md p-4">
      <MagicCard className="flex flex-col items-center justify-center p-6 shadow-2xl rounded-xl">
        <div className="w-full space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold ">
              COMING SOON!
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Send me a message and I'll get back to you.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black dark:text-white">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full resize-none rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="flex justify-center pt-2">
            <InteractiveHoverButton>Send Message</InteractiveHoverButton>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}



// Define instance of a Project Card
interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  className?: string;
  projectUrl?: string;
}

function CardProject({ title, description, tech, className, projectUrl }: ProjectProps) {
  return (
    <MagicCard className={`flex flex-col h-84  shadow-sm rounded-2xl p-2 ${className}`}>
      <CardHeader className="relative">
          {/* GitHub icon on top right */}
          {/* <div className="absolute right-6 top-6">
            <div className="p-2 rounded-full border border-zinc-100 bg-zinc-50/50">
              <svg className="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
          </div> */}

          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
          <CardDescription className="text-zinc-500 text-base pt-2 leading-relaxed">
            {description}
          </CardDescription>
      </CardHeader>

       <div className="mt-auto">
          <CardContent>
            <div>
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.1em] mb-3 text-left ml-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {tech.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full bg-zinc-300 text-zinc-1000 dark:text-zinc-700 hover:bg-zinc-200 border-none font-semibold px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-zinc-200">
            <a href={projectUrl || "#"} target={projectUrl ? "_blank" : undefined} rel={projectUrl ? "noopener noreferrer" : undefined} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-700 transition-colors">
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </CardFooter>
      </div>   
    </MagicCard>
  )
}


function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
      
      {/* LARGE CARD (Spans 2 columns) */}
      <CardProject 
        className="md:col-span-2"
        title="Retrieval Augmented Time Series Forecasting"
        description="Reproduced the RAFT framework by integrating a similarity-based retrieval module with an MLP forecaster to capture long-term historical patterns. Validated against 10 multivariate benchmarks, achieving results consistent with original research, and established a new performance benchmark on a non-stationary e-commerce dataset to prove real-world generalization."
        tech={["Python", "PyTorch", "uv", "NumPy", "Pandas", "matplotlib",]}
        projectUrl="https://github.com/GabAsencios/Deep_Learning"
      />

      {/* SMALL CARD (Spans 1 column) */}
      <CardProject 
        title="Airplane Shooting Game"
        description="3D airplane shooter in C++ and OpenGL, featuring a custom rendering engine with Phong lighting, dynamic shadows, and texture mapping."
        tech={["C++", "OpenGL", "Phong Lighting"]}
        projectUrl="https://github.com/GabAsencios/Computer_Graphics_A2"
      />

      {/* ANOTHER SMALL CARD */}
      <CardProject 
        title="Database Volleyball Club"
        description="Created a normalized MySQL relational database (3NF/BCNF) for managing club operations, optimized for data integrity and query performance. Developed a Python Flask web for GUI."
        tech={["MySQL", "Python", "Flask"]}
        projectUrl="https://github.com/GabAsencios/VolleyballClubDatabase"
      />

      {/* LARGE CARD */}
      <CardProject 
        className="md:col-span-2"
        title="My Page – Personal Portfolio Website"
        description="Architected and deployed a full-stack personal portfolio using React and TypeScript, styled with Tailwind CSS for a responsive, modern UI. Built a Node.js backend to manage the contact section's messaging logic and integrated various third-party components for enhanced interactivity. The entire application is hosted on AWS, leveraging cloud infrastructure for high availability and performance."
        tech={["React", "TypeScript", "Tailwind CSS", "Node.js", "AWS", "HTML"]}
        projectUrl="https://github.com/GabAsencios/personalPage"
      />

    </div>
  )
}

// COMPLETE
// function CardBio() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
      
//       {/* LARGE CARD (Spans 2 columns) */}
//       <CardProject 
//         className="md:col-span-2"
//         title="QwikRide – Bike Sharing System"
//         description="Bike sharing platform with role-based access control and JWT authentication. Optimized for fast load times with code splitting."
//         tech={["React", "Spring Boot", "Spring Security", "Maven", "JWT"]}
//       />

//     </div>
//   )
// }


function CardBio() {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden border-none">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-center">A little about me</CardTitle>
          </CardHeader>
          <div className="text-muted-foreground space-y-4">
            <p className="bio-text">
              Fourth year Computer Science student passionate about full-stack development and AI/ML applications. Experienced
in database design, 3D graphics programming, and web development. Eager to contribute to a high-performing
engineering team and grow alongside experienced peers to launch robust and impactful products.
            </p>
            <p className="bio-text">
              Outside of academics, I enjoy rock climbing, playing video games, and exploring new technologies. I'm always looking for
opportunities to learn and take on new challenges.
            </p>
            
          </div>
          <CardFooter className="p-0 mt-6">
            
          </CardFooter>
        </div>
        
      </div>
    </Card>
  )
}





