import { useState } from "react";

const commands: Record<string, string> = {
  help: `
Available Commands

about
skills
projects
resume
contact
github
clear
`,

  about: `
AYUSHI BANSAL

AI Developer
Open Source Contributor
B.Tech CSE Student

Focused on:
• Artificial Intelligence
• Full Stack Development
• Open Source Contributions
• Social Impact Technology

Goal:
Google Summer of Code 2027
`,

  skills: `
TECH STACK

Languages:
• Python
• TypeScript
• JavaScript

Frontend:
• React
• Tailwind CSS
• Framer Motion

Backend:
• FastAPI
• Node.js

Database:
• MongoDB

AI/ML:
• Transformers
• NLP
• Machine Learning

Tools:
• Git
• GitHub
• Three.js
`,

  projects: `
PROJECTS

🌍 SETU
AI-powered NGO ↔ Volunteer Matching Platform

🤖 SENTILYTICS
AI Feedback Analyzer using NLP and Sentiment Analysis

👁️ DRISHTI
3D GPS Navigation System for Specially Abled People

Type:
github

to view my repositories.
`,

  github: `
GitHub Profile

https://github.com/Ayushibansal805

Open Source Journey:
• Personal Projects
• AI Applications
• Full Stack Development
• GSoC Preparation
`,

  contact: `
CONTACT

Email:
ayushi.bansal_cs.h24@gla.ac.in

GitHub:
github.com/Ayushibansal805

Status:
Open to collaborations,
hackathons and open source projects.
`,

  resume: `
RESUME

Use the Resume Download button above.

Highlights:
• AI Development
• Full Stack Projects
• Open Source Contributions
• GSoC 2027 Preparation
`,
};

export default function Terminal() {
  const [output, setOutput] = useState(`
AI TERMINAL v1.0

Welcome, Visitor.

Type 'help' to see available commands.
`);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Enter") return;

    const command = e.currentTarget.value
      .trim()
      .toLowerCase();

    if (command === "clear") {
      setOutput(`
AI TERMINAL v1.0

Terminal cleared.
Type 'help'
`);
    } else {
      setOutput(
        `
> ${command}

${commands[command] || "Command not found. Type 'help'."}
`
      );
    }

    e.currentTarget.value = "";
  };

  return (
    <div
      className="
      bg-black/80
      backdrop-blur-xl
      border
      border-cyan-500/30
      rounded-3xl
      p-6
      font-mono
      shadow-2xl
      shadow-cyan-500/10
      "
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div
        className="
        text-cyan-300
        whitespace-pre-line
        min-h-[280px]
        text-sm
        md:text-base
        "
      >
        {output}
      </div>

      <div className="flex items-center mt-6 border-t border-cyan-500/20 pt-4">
        <span className="text-cyan-400 mr-3">
          visitor@ayushi:~$
        </span>

        <input
          onKeyDown={handleKeyDown}
          className="
          bg-transparent
          outline-none
          flex-1
          text-white
          "
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
}