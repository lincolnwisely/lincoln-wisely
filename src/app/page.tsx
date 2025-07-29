import Image from "next/image";
import ContactForm from "./form";
import Experience from "./experience";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pb-8">
        <h1 className="text-4xl font-mono font-bold">Lincoln Wisely</h1>
        <p>
          Hi, I&#39;m Lincoln, a software engineer based in Saint Louis,
          Missouri, USA.
        </p>
        <p>
          I am really proud of and grateful for the work I have contributed in
          my career thus far. That said, I still have a lot to learn and a lot
          of room to grow.
        </p>
        <p>
          The majority of my work experience relates to JS frameworks such as
          Next.js and Gatsby; libraries like React, Bootstrap, JQuery; and CMS
          development - namely WordPress and Drupal. I love the thrill and
          challenge of software development, especially when I get to
          collaborate with smart people from around the world.
        </p>

        <p>
          I also love dogs, traveling to new places and watching{" "}
          <a
            className="underlined text-indigo-400"
            href="https://watch.plex.tv/u/lincolnwisely"
            target="_blank"
          >
            movies and shows.
          </a>
        </p>
        <br />

        <div className="w-full mx-auto">
          <h2 className="font-mono font-bold text-2xl">
            Most recent experience
          </h2>
          <br />
          <Experience />
        </div>
        <br />

        <div className="w-full">
          <h2 className="font-mono font-bold text-2xl">Contact me</h2>
          <br />
          <ContactForm />
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lincolnwisely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/github.png"
            alt="Github icon"
            width={22}
            height={22}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/lincolnwisely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/linkedin.png"
            alt="LinkedIn logo"
            width={20}
            height={20}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
