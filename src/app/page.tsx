import InlineLink from "@/components/inline-link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SquareArrowOutUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 p-8">
      {/* Header Section */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-3xl font-bold">Joshua Tenorio</h1>
          <p className="text-muted-foreground text-lg">Software Engineer</p>
          <p className="">
            I&apos;m a Software Engineer living in Chandler, Arizona. My hobbies
            include building combat robots, playing video games, and keeping up
            with Formula 1. Find out what I&apos;m doing{" "}
            <InlineLink href={"/now"}>now</InlineLink>.
          </p>
        </div>

        <div className="md:w-64">
          <Skeleton className="aspect-square w-full" />
        </div>
      </section>
      {/* links Section */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-row gap-3">
          <Button variant={"paper"}>
            GitHub
            <SquareArrowOutUpRight className="ml-2" />
          </Button>
          <Button variant={"paper"}>
            LinkedIn <SquareArrowOutUpRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
