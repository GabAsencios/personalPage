"use client";

import "./App.css";
import React from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { MagicCard } from "@/components/ui/magic-card.tsx";

import { Linkedin, FileText, Mail } from "lucide-react";
import { FaJava, FaDatabase } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiMysql,
  SiJupyter,
  SiGooglecolab,
  SiWireshark,
} from "react-icons/si";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type IconProps = React.HTMLAttributes<SVGElement>;

import { Button as FlowbiteButton } from 'flowbite-react';

export function App() {
  return (
    <main className="snap-container">
      <FlowbiteButton>Flowbite button</FlowbiteButton>
      <AnimatedThemeToggler className="fixed top-4 right-4 z-50" />
      <DockDemo />
      {mainPageButton()}
      {/* SECTION 1: HERO */}
      <section id="main-section" className="main-section">
        {/* <img className="selfie-pic" src="/" alt="selfie" /> */}
        <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          Gabriel Asencios
        </span>
        {buttonPages()}
      </section>
      {/* SECTION 2: ABOUT*/}
      <section id="about-section" className="about-section">
        <h2 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          About
        </h2>
        <CardBio/>
      </section>
      {/* SECTION 3: PROJECTS */}
      <section id="projects-section" className="projects-section">
        <h2 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          Projects
        </h2>
        <div className="card-container">
          <CardProject />
        </div>

      </section>
      {/* SECTION 4: SKILLS */}
      <section
        id="skills-section"
        className="skills-section min-h-screen w-full flex flex-col items-center justify-center gap-8"
      >
        <h2 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          Skills
        </h2>
        <SkillsGrid />
      </section>
      {/* SECTION 5: CONTACT */}
      <section
        id="contact-section"
        className="skills-section min-h-screen w-full flex flex-col items-center justify-center gap-8"
      >
        <h2 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
          Contact
        </h2>
        {contactCard()}
      </section>
    </main>
  );
}

function DockDemo() {
  return (
    <div className="hero-container">
      <div className="dashboard-container">
        <Dock direction="middle">
          <DockIcon>
            <Icons.gitHub className="size-6" />
          </DockIcon>
          <DockIcon>
            <Linkedin className="size-6" />
          </DockIcon>
          <DockIcon>
            <FileText className="size-6" />
          </DockIcon>
          <DockIcon>
            <Mail className="size-6" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}

//Buttons to scroll to sections
const scrollToSection = (className: string) => {
  const element = document.getElementById(className);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
function buttonPages() {
  return (
    <div className="flex flex-row gap-4">
      <div>
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

function mainPageButton() {
  return (
    <div className="home-button-container">
      <InteractiveHoverButton onClick={() => scrollToSection("main-section")}>
        {" "}
        Home{" "}
      </InteractiveHoverButton>
    </div>
  );
}

// Skills Grid Component
function SkillsGrid() {
  const skills = [
    { id: 0, icon: FaJava, name: "90%" },
    { id: 1, icon: SiPython, name: "85%" },
    { id: 2, icon: SiJavascript, name: "75%" },
    { id: 3, icon: SiHtml5, name: "85%" },
    { id: 4, icon: SiCss3, name: "80%" },
    { id: 5, icon: SiCplusplus, name: "75%" },
    { id: 6, icon: SiReact, name: "70%" },
    // { id: 7, icon: FaDatabase, name: "80%" },
    { id: 8, icon: SiNodedotjs, name: "70%" },
    { id: 9, icon: SiPytorch, name: "90%" },
    { id: 10, icon: SiScikitlearn, name: "90%" },
    { id: 11, icon: SiMysql, name: "80%" },
    { id: 12, icon: SiJupyter, name: "80%" },
    { id: 13, icon: SiGooglecolab, name: "80%" },
    { id: 14, icon: SiWireshark, name: "75%" },
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

function contactCard() {
  return (
    <div className="w-full max-w-md p-4">
      <MagicCard
        className="flex flex-col items-center justify-center p-6 shadow-2xl"
        gradientColor="#D9D9D955"
      >
        <div className="w-full space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Send me a message and I'll get back to you.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:outline-none dark:border-gray-700 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black dark:text-white">
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

function CardProject() {
  return (
    <>
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
    
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>

      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
    </>
  )
}

function CardBio() {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold">[Your Name]</CardTitle>
            <CardDescription className="text-lg">
              [Your Title]
            </CardDescription>
          </CardHeader>
          <div className="text-muted-foreground space-y-4">
            <p>
              [Your bio description goes here. This is a great place to introduce yourself and talk about your background.]
            </p>
            <p>
              [You can add more details about your experience, passions, and what you are looking for.]
            </p>
          </div>
          <CardFooter className="p-0 mt-6">
            <Button>[Contact]</Button>
          </CardFooter>
        </div>
        <div className="w-full md:w-2/5 relative min-h-[300px]">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  )
}