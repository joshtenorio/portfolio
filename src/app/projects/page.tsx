import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  timeline: string;
  imageHref?: string;
}
export default function ProjectsPage() {
  const ongoingProjects = [
    {
      id: "combat-robots",
      title: "Combat Robotics",
      description:
        "Competitive combat robots designed and built for various weight classes.",
      href: "/projects/combat-robots",
      tags: ["Mechanical Design", "CAD", "DFM", "Electronics"],
      timeline: "Competing since February 2025",
      imageHref:
        "https://3qslpz2d4s.ufs.sh/f/BEAnWrmyVH5IpIXCvOQhNJIFc07Eu96jPWoCieDxTQpHKAsL",
    },
  ];

  const completedProjects = [
    {
      id: "glassypdm",
      title: "glassyPDM",
      description:
        "A product data management system designed for use by my Formula SAE team. I developed a custom version control system to allow for users to selectively download and upload files to a shared folder.",
      href: "/projects/glassypdm",
      tags: [
        "System Design",
        "S3",
        "TypeScript",
        "Rust",
        "Go",
        "React",
        "Tauri",
      ],
      timeline: "August 2023 - November 2025",
    },
    {
      id: "fsae-daq",
      title: "Formula SAE Data Acquisition",
      description:
        "A custom data acquisition system for a formula-style race car. I was responsible for PCB design, firmware development, basic data analysis, and wiring.",
      href: "/projects/fsae-daq",
      tags: [
        "Project Management",
        "Embedded Systems Integration",
        "Data Visualization",
        "PCB Design",
        "C",
        "Python",
      ],
      timeline: "September 2021 - May 2024",
    },
    {
      id: "sc2ai",
      title: "SC2 AI Arena",
      description:
        "A rule-based StarCraft 2 bot developed to compete in the SC2 AI Arena ladder. Achieved an overall 47% win-rate and won 57% of matches lasting between 10 and 15 minutes.",
      href: "https://github.com/joshtenorio/monte-sc2",
      tags: ["C++"],
      timeline: "May 2021 - January 2022",
    },
    {
      id: "battlesnake",
      title: "Battlesnake",
      description:
        "A rule-based bot developed to compete in Battlesnake's Summer 2021 league. Achieved 65th out of 160 competitors and reached the finals for the gold tier tournament.",
      href: "https://github.com/joshtenorio/ninemo-battlesnake", // TODO: update href
      tags: ["Go"],
      timeline: "Summer 2021",
    },
  ];

  const renderProjects = (projects: Project[]) => (
    <>
      {projects.map((project, index) => (
        <div key={project.id}>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Left side: Title, Description, Timeline, Tags, Button */}
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground text-sm">
                {project.timeline}
              </p>
              <p className="text-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div>
                <Button variant="paper" asChild>
                  <Link
                    href={project.href}
                    target={
                      project.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    View Project
                    {project.href.startsWith("http") ? (
                      <SquareArrowOutUpRight className="ml-2" />
                    ) : (
                      <ArrowRight className="ml-2" />
                    )}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side: Image placeholder */}
            <div className="md:w-80">
              {project.imageHref ? (
                <Image
                  src={project.imageHref}
                  alt={project.title}
                  height={200}
                  width={300}
                />
              ) : (
                <Skeleton className="h-48 w-full" />
              )}
            </div>
          </div>

          {/* Separator (don't show after last item) */}
          {index < projects.length - 1 && <Separator className="mt-8" />}
        </div>
      ))}
    </>
  );

  return (
    <div className="flex flex-col gap-12 p-8">
      {/* Ongoing Projects Section */}
      <section>
        <h1 className="mb-6 text-center text-3xl font-bold">
          Ongoing Projects
        </h1>
        <div className="flex flex-col gap-8">
          {renderProjects(ongoingProjects)}
        </div>
      </section>

      {/* Completed Projects Section */}
      <section>
        <h1 className="mb-6 text-center text-3xl font-bold">
          Archived Projects
        </h1>
        <div className="flex flex-col gap-8">
          {renderProjects(completedProjects)}
        </div>
      </section>
    </div>
  );
}
