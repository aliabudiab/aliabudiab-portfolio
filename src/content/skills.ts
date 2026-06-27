import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular" },
      { name: "React" },
      { name: "Vue" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "Engineering",
    skills: [
      { name: "Frontend Architecture" },
      { name: "Full Stack Development" },
      { name: "Responsive Design" },
      { name: "Performance Optimization" },
      { name: "Digital Transformation" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Leadership",
    skills: [
      { name: "Technical Leadership" },
      { name: "Team Mentoring" },
      { name: "Cross-functional Collaboration" },
      { name: "Project Management" },
      { name: "Workflow Design" },
      { name: "Code Quality" },
    ],
  },
  {
    title: "Practices & Tools",
    skills: [
      { name: "Agile" },
      { name: "Large-Scale Scrum (LeSS)" },
      { name: "ServiceNow" },
      { name: "Git" },
      { name: "Debugging" },
      { name: "Figma" },
    ],
  },
];
