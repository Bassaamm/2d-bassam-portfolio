import { Link } from "react-router";
import { Separator } from "./ui/separator";

export default function About() {
  return (
    <div className="bg-black w-full font-big-shot p-12 md:p-16 min-h-screen text-white">
      <div className="mx-auto max-w-lg md:max-w-2xl relative ">
        <Link
          to={"/"}
          className="md:text-4xl text-xl absolute top-0 -left-8 md:-left-36 cursor-pointer text-yellow-200"
        >
          {"<--"}back
        </Link>
        <div className="md:text-4xl text-3xl pt-20">About Me</div>
        <Separator className="my-6" color="white" />
        <div className="text-base ">
          Hi, I’m Bassam, a passionate developer, Computer information systems
          student at King Saud University, currently in my final semester (yes,
          finally!).
          <br />
          <br />
          My interest in technology and software development has always been a
          driving force in my life. From a young age, I’ve been fascinated by
          how systems work, and over the years, this curiosity has grown into a
          deep love for building and engineering software solutions.
          <br />
          <br />
          Throughout my studies and projects I've worked on, I’ve enjoyed
          exploring and adapting to the latest technologies. I thrive on solving
          real-world problems and have been fortunate to start tackling them
          even before graduation. You can check out some of the projects I’ve
          worked on in the Projects section of this portfolio. <br />
          <br />
          Looking back, I’m incredibly grateful to have pursued a field that
          aligns perfectly with my interests. The journey so far has been
          rewarding, and I can’t wait to see what challenges and opportunities
          the future holds.
          <br />
          <br />
          Thank you for visiting my portfolio! I hope you enjoy exploring it as
          much as I enjoyed creating it. If you’d like to reach out, feel free
          to use the{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-800 decoration-blue-500 hover:decoration-blue-800"
            to="/contact"
          >
            Contact Me
          </Link>{" "}
          section or drop me an email at{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-800 decoration-blue-500 hover:decoration-blue-800"
            to="/contact"
          >
            bassamalqrni@gmail.com
          </Link>{" "}
          . Let’s connect!{" "}
        </div>
      </div>
    </div>
  );
}
