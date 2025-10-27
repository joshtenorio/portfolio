import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 p-8">
      {/* Header Section */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Left side: Name, Title, Blurb */}
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-3xl font-bold">Joshua Tenorio</h1>
          <p className="text-muted-foreground text-lg">Software Engineer</p>
          <p className="">Welcome to my website! TODO text</p>
        </div>

        {/* Right side: Profile Picture Placeholder */}
        <div className="md:w-64">
          <Skeleton className="aspect-square w-full" />
        </div>
      </section>
    </div>
  );
}
