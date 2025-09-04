import Image from 'next/image';
import ContactForm from '@/components/form';
import Experience from '@/components/experience';
import Banner from '@/components/banner';
import Chip from '@/components/chip';
import Quotes from '@/components/quotes';

export default function Home() {
  return (
    <div>
      <Banner />
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
                I have 9 years of combined experience as a web developer and
                software engineer, most recently using TypeScript and React. I
                have full-stack experience as well, and am building a &nbsp;
                <a
                  href="https://github.com/lincolnwisely/sw_jewelry"
                  className="text-indigo-400"
                  target="_blank"
                  rel="nofollow noopen"
                >
                  MERN-stack e-commerce site
                </a>
                &nbsp;for my mom&#39;s jewelry business to level up my backend
                skills.
              </p>

              <br />
              <p>
                I love dogs, traveling to new places and managing my personal
                media server.
              </p>

              <br />
              <br />

              <h2 className="font-mono font-bold text-2xl">
                Languages, Frameworks, Libraries, Tools
              </h2>
              <br />

              <div className="flex flex-wrap gap-2 pb-6">
                <Chip
                  label="TypeScript"
                  url="https://www.typescriptlang.org/"
                />
                <Chip
                  label="JavaScript"
                  url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
                <Chip label="Node.js" url="https://nodejs.org/en" />
                <Chip label="React" url="https://react.dev/" />
                <Chip label="Drupal" url="https://www.drupal.org/" />
                <Chip label="Next.js" url="https://nextjs.org/" />
                <Chip label="Gatsby" url="https://www.gatsbyjs.com/" />
                <Chip label="MongoDB" url="https://www.mongodb.com/" />
                <Chip label="WordPress" url="https://wordpress.org/" />
                <Chip label="Postman" url="https://www.postman.com/" />
                <Chip label="git" url="https://git-scm.com" />
                <Chip label="Bootstrap" url="https://getbootstrap.com/" />
                <Chip label="jQuery" url="https://jquery.com/" />
                <Chip label="a little python" url="https://www.python.org/" />
                <Chip label="Figma" url="https://www.figma.com/" />
                <Chip
                  label="Claude Code"
                  url="https://www.anthropic.com/claude-code"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded bg-indigo-500 bg-[url(/img/crooked.png)] bg-cover bg-center h-60 mb-10 lg:h-full"></div>
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
            <h2 className="font-mono font-bold text-2xl">
              Wise words from a baddie
            </h2>
            <br />
            <Quotes />
          </div>
          <br />

          <div className="w-full" id="form">
            <h2 className="font-mono font-bold text-2xl">Contact me</h2>
            <br />
            <ContactForm />
          </div>
        </main>
      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4">
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
