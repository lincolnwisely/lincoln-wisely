import Image from "next/image";
import ContactForm from "@/components/form";
import Experience from "@/components/experience";
import Banner from "@/components/banner";
import Chip from "@/components/chip";

export default function Home() {
  return (
    <div>

        <Banner message={"Hey everyone! I am currently seeking a new role. Reach out via the form, LinkedIn, BlueSky or email."} />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start pb-8">
        <h1 className="text-4xl text-left font-mono font-bold">
          Lincoln Wisely
        </h1>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <p>
              Hi, I&#39;m Lincoln, a software engineer based in Saint Louis,
              Missouri, USA.
            </p>
            <br />

            <p>
              I am really proud of and grateful for the work I have contributed
              in my career thus far. That said, I still have a lot to learn and
              a lot of room to grow.
            </p>
            <br />




    <div className="flex flex-wrap gap-2 pb-6">
      <Chip label="TypeScript" />
      <Chip label="JavaScript" />
      <Chip label="Node.js" />
      <Chip label="React" />
      <Chip label="Drupal" />
      <Chip label="Next.js" />
      <Chip label="Gatsby" />
      <Chip label="MongoDB" />
      <Chip label="WordPress" />
      <Chip label="Bootstrap" />
      <Chip label="jQuery" />
      <Chip label="some python" />
      <Chip label="version control" />
      <Chip label="Figma" />
      <Chip label="Adobe XD" />
      <Chip label="Logic & Reason" />
    </div>


              
              <p>I love the challenge of software development, especially when I get to collaborate with smart people from around the world!
            </p>
            
            <br />

            <p>
              I also love dogs, traveling to new places and managing my personal media server. I&#39;m obsessed with watching{" "}
              <a
                className="underlined text-indigo-400"
                href="https://watch.plex.tv/u/lincolnwisely"
                target="_blank"
                >
                movies and shows. 
              </a>
            </p>
          </div>
          <div className="w-full lg:w-1/2 rounded bg-indigo-500 bg-[url(/img/lincoln.jpg)] bg-blend-multiply bg-cover bg-center h-60 mb-10 lg:h-full"></div>
        </div>
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
        </div>

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
