export default function NowPage() {
  return (
    <div className="flex flex-col p-8">
      <div>
        This is my{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          className="text-primary underline"
        >
          now
        </a>{" "}
        page.
      </div>
      <div className="pt-4 text-center text-xl font-semibold">
        Arizona State
      </div>
      <div className="text-center">
        I&apos;ve just graduated from Arizona State University in May 2024 with
        a Bachelors in Computer Science and a Bachelors in Mathematics. There, I
        was the Data Acquisition team lead for ASU&apos;s Formula SAE team Sun
        Devil Motorsports from Spring 2022 to Spring 2024.
      </div>
      <div className="pt-4 text-center text-xl font-semibold">Garmin</div>
      <div className="text-center">
        Currently I am a Software Engineer 1 at Garmin after interning there the
        past two summers in 2022 and 2023.
      </div>
      <div className="pt-4 text-center text-xl font-semibold">
        Combat Robotics
      </div>
      <div className="text-center">
        I design and build combat robots to compete in the full combat antweight
        (1-pound) and beetleweight (3-pound) weight classes in events in the
        United States.
      </div>
    </div>
  );
}
