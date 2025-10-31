import { ArrowRight, Trophy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";

export interface Podium {
  place: 1 | 2 | 3;
  eventName: string;
}

export interface CombatRobot {
  name: string;
  weightClass: string;
  fightRecord: {
    wins: number;
    losses: number;
  };
  numEvents: number;
  podiums: Podium[];
  slug?: string;
}

interface CombatRobotCardProps {
  robot: CombatRobot;
}

const getPodiumColor = (place: 1 | 2 | 3): string => {
  switch (place) {
    case 1:
      return "text-yellow-500"; // Gold
    case 2:
      return "text-gray-400"; // Silver
    case 3:
      return "text-amber-700"; // Bronze
  }
};

export function CombatRobotCard({ robot }: CombatRobotCardProps) {
  return (
    <div className="flex flex-row gap-6 rounded-lg border p-6">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">{robot.name}</span>
          <span className="text-muted-foreground text-sm italic">
            {robot.weightClass}
          </span>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="font-bold">
            {robot.fightRecord.wins}W-{robot.fightRecord.losses}L
          </span>
          <span className="text-muted-foreground">
            · {robot.numEvents} {robot.numEvents === 1 ? "event" : "events"}
          </span>
        </div>

        <div className="flex gap-2">
          <TooltipProvider>
            {robot.podiums.map((podium, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Trophy
                    className={`h-5 w-5 ${getPodiumColor(podium.place)}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{podium.eventName}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div>
          {robot.slug === undefined ? (
            <Button disabled={true} variant={"paper"}>
              Coming Soon
              <ArrowRight className="ml-2" />
            </Button>
          ) : (
            <Button disabled={false} variant={"paper"} asChild>
              <Link href={`/projects/combat-robots/${robot.slug}`}>
                View Details
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="flex-shrink-0">
        <Skeleton className="h-32 w-32 rounded-md" />
      </div>
    </div>
  );
}
