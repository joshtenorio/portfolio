import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-xl tracking-tight sm:text-[5rem]">
          josh&apos;s tech journey
        </h1>
      </div>
    </main>
  );
}
