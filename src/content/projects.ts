import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lec-gs-booking-ecosystem",
    title: "LEC-GS Digital Booking Ecosystem",
    description:
      "A unified online experience platform powering Ski Dubai, Snow Oman, and Snow Abu Dhabi — transforming indoor entertainment operations into seamless digital journeys.",
    highlights: [
      "Central digital hubs for attraction discovery, events, and end-to-end online bookings",
      "Digitized ticketing, class scheduling, equipment rentals, and personalized user profiles",
      "Led development processes across cross-functional teams, aligning design vision with scalable execution",
    ],
    technologies: ["React", "Vue", "JavaScript", "REST", "UX Engineering"],
    featured: true,
  },
  {
    id: "moj-bracelet-system",
    title: "MOJ Electronic Bracelet Control System",
    description:
      "A government-grade monitoring platform managing individuals under electronic surveillance — enforcing movement restrictions and automating the full bracelet lifecycle.",
    highlights: [
      "Implemented core features end-to-end with modularized workflows and optimized reporting modules",
      "Gathered stakeholder requirements and integrated the platform across multiple government sectors",
      "Built internal tools to streamline field operations for officers handling on-ground cases",
    ],
    technologies: ["Angular", "JavaScript", "Real-time Tracking", "Analytics"],
    featured: true,
  },
  {
    id: "tesco-ticketing",
    title: "TESCO Ticketing & Tracking System",
    description:
      "An end-to-end platform that replaced manual, paper-based customer service workflows with transparent, real-time ticket management and automated reporting.",
    highlights: [
      "Led full-stack development — scalable architecture, real-time tracking, and resolution dashboards",
      "Integrated with legacy printing tools for automated invoice generation",
      "Streamlined internal processes and significantly improved customer service transparency",
    ],
    technologies: ["Angular", "JavaScript", "Node.js", "REST", "Reporting"],
  },
  {
    id: "gce-maintenance",
    title: "GCE Maintenance Ticketing System",
    description:
      "A digital platform modernizing maintenance workflows — giving clients self-service request management and teams real-time visibility into service performance.",
    highlights: [
      "Replaced inefficient manual processes with a centralized, data-driven operations dashboard",
      "Built customizable reporting and analytics modules across configurable timeframes",
      "Improved client satisfaction and enabled proactive, metrics-informed decision-making",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Dashboards", "Analytics"],
  },
];
