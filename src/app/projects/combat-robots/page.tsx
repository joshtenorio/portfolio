import {
  CombatRobotCard,
  type CombatRobot,
} from "@/components/combat-robot-card";

const robots: CombatRobot[] = [
  {
    name: "popcat",
    weightClass: "1lb",
    fightRecord: { wins: 5, losses: 6 },
    numEvents: 3,
    podiums: [
      {
        place: 3,
        eventName: "EVAC October 2025",
      },
    ],
    slug: "popcat",
  },
  {
    name: "pop-pop-popcat",
    weightClass: "3lb",
    fightRecord: { wins: 0, losses: 0 },
    numEvents: 0,
    podiums: [],
  },
];

export default function CombatRobotsPage() {
  return (
    <div className="flex flex-col gap-12 p-8">
      <section>
        <h1 className="mb-6 text-center text-3xl font-bold">Combat Robotics</h1>
        <div className="mb-6 text-center">{/* TODO: add description */}</div>
        <div className="text-foreground flex flex-col gap-8">
          {robots.map((robot, index) => (
            <CombatRobotCard key={index} robot={robot} />
          ))}
        </div>
      </section>
    </div>
  );
}
