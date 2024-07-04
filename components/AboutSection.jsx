"use client";

import React from "react";
import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import TabButton from "./TabButton";

import TAB_DATA from "@/data/AboutTabData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-8">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-[100px]"
          src={"/images/aboutPhoto.jpeg"}
          alt="about"
          height={500}
          width={500}
          priority
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg text-justify">
            {`Hello, Hasan Mahmud here, I'm a passionate Computer Science and Engineering professional with a strong focus on the dynamic world of web development. With a solid foundation in data structures and problem-solving algorithms, I thrive in creating innovative and efficient solutions for web-based projects.

Current Focus
Currently, I am deepening my expertise in web development technologies, including HTML, CSS, JavaScript, and modern frameworks like React and Node.js. I am also actively working on several personal projects to enhance my practical skills and build a diverse portfolio.`}
          </p>
          <div className="socials flex flex-row gap-2 my-4">
            <Link
              href="https://www.facebook.com/hasan.mahmud.14203544"
              target="_blank"
            >
              <BsFacebook className="text-2xl hover:text-primary-600 mr-2 hover:scale-105 transition ease-in-out" />
            </Link>
            <Link href="https://github.com/hasanposh" target="_blank">
              <BsGithub className="text-2xl hover:text-primary-600 mx-2 hover:scale-105 transition ease-in-out" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mdhasanmahmud104/"
              target="_blank"
            >
              <BsLinkedin className="text-2xl hover:text-primary-600 mx-2 hover:scale-105 transition ease-in-out" />
            </Link>
          </div>
          <div className="flex flex-row justify-start mt-5">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
