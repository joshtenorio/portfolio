import InlineLink from "@/components/inline-link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SquareArrowOutUpRight, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 p-8">
      <Alert variant={"destructive"}>
        <AlertDescription className="flex items-center gap-2">
          <TriangleAlert className="size-4 shrink-0" />
          Please mind the dust while I build this website :)
        </AlertDescription>
      </Alert>
      {/* Header Section */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-3xl font-bold">Joshua Tenorio</h1>
          <p className="">
            I&apos;m a Software Engineer living in Chandler, Arizona. My hobbies
            include building combat robots, playing Riftbound, and keeping up
            with Formula 1. Find out what I&apos;m doing{" "}
            <InlineLink href={"/now"}>now</InlineLink>.
          </p>
        </div>

        <div className="md:w-64">
          <Image
            src="https://3qslpz2d4s.ufs.sh/f/BEAnWrmyVH5IZpQNSLBapdb723HSD4uimOUsnoe9L5tqlFaR"
            alt="self"
            width={200}
            height={200}
          ></Image>
        </div>
      </section>
      {/* links Section */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-row gap-3">
          <Button variant={"paper"} asChild>
            <Link href={"https://github.com/joshtenorio"} target="_blank">
              GitHub
              <SquareArrowOutUpRight className="ml-2" />
            </Link>
          </Button>
          <Button variant={"paper"} asChild>
            <Link
              href={"https://www.linkedin.com/in/joshuatenorio/"}
              target="_blank"
            >
              LinkedIn <SquareArrowOutUpRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
