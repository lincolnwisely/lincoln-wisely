import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Lincoln Wisely</h1>
        <p className="text-lg">
          Hi! I&#39;m Lincoln, a software engineer based in Saint Louis,
          Missouri, USA.
        </p>
        <p>
          I love the thrill and challenge of software development, especially
          when I get to collaborate with smart people from around the world.
        </p>
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/lincoln42.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/bluesky.png"
            alt="Bluesky logo"
            width={30}
            height={30}
          />
          Bluesky
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.discogs.com/user/lincolnwisely/collection?header=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/discogs.png"
            alt="Discogs icon"
            width={19}
            height={19}
          />
          Discogs
        </a>
      </footer>
    </div>
  );
}
