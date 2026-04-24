import Image from 'next/image';
import ContactForm from '@/components/form';
import Experience from '@/components/experience';
import Quotes from '@/components/quotes';
import Banner from '@/components/banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
          <div className="flex flex-col-reverse lg:flex-row justify-center font-medium">
            <div className="w-full lg:pr-8 flex-center">
              <h1 className="text-4xl text-left font-mono font-bold pb-8">
                Lincoln Wisely
              </h1>
              <p>
                Hi, I&#39;m Lincoln, a software engineer based in Saint Louis,
                Missouri, USA.
              </p>
              <br />
              <p>
                I have 9 years of combined experience as a web developer and
                software engineer, most recently using TypeScript and React.</p>
              <br />
              <p>
                I love dogs, golf, video games, traveling to new places and managing my personal
                media server.
              </p>
              <br />
              <p>I recently joined as a volunteer web developer at <a href="https://recoveringfromreligion.org" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400 hover:text-indigo-500 ">Recovering from Religion</a>, a global resource for online and in-person, judgement-free support for those seeking community at any stage of their deconstruction process.</p>
            </div>
          </div>
          <br />

          <div className="w-full mx-auto">
            <h2 className="font-mono font-bold text-2xl">
              Recent work experience
            </h2>
            <br />
            <Experience />
          </div>
          <br />

          {/* <div className="w-full">
            <h2 className="font-mono font-bold text-2xl">Personal projects</h2>
            <br />
            <Projects />
          </div>
          <br /> */}

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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/lincoln_wisely_resume.pdf"
          download="lincoln_wisely_resume.pdf"
        >
          <Image
            aria-hidden
            src="/img/file.png"
            alt="resume icon"
            width={15}
            height={15}
          />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@lwisely/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/youtube.png"
            alt="youtube icon"
            width={22}
            height={22}
          />
          Youtube
        </a>
      </footer>
    </div>
  );
}
