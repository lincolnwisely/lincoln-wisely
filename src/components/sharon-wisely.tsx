import Image from 'next/image';

export default function SharonWisely() {
  return (
    <div className="font-medium w-full lg:w-1/2 lg:pr-8 flex-1">
      <div className="flex flex-col h-full border rounded-lg overflow-hidden">
        <div>

    <Image className="object-cover" src={'/img/swj.png'}
          width={300}
          height={300}
          layout='responsive'
          alt="screenshot of Sharon Wisely Jewelry"
          />
                          </div>

          <div className="p-4">

                           
        <h2 className="font-bold text-xl text-lime-200 mr-4">
          Sharon Wisely Jewelry
        </h2>
        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text--400 inset-ring inset-ring-yellow-400/20">
          In-Progress
        </span>
   
      <p>
        This will replace my mom&#39;s use of Etsy,
        which has an unreliable algorithm and is a shitty company in general (my words). Follow
        along{' '}
        <a
          href="https://sw-jewelry-client.vercel.app/"
          className="underline text-lime-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className="p-8 font-medium">
        <li className="pb-4">
          Built with MongoDB, Express, React, and Node.js (and with Claude Code assistance)
        </li>
        <li className="pb-4">
         User authentication w/ JWT tokens, product management and
          Stripe payments integration
        </li>
        <li className="pb-4">
          CI/CD pipeline for simplified deployments
        </li>
        <li className="pb-4">
          Custom RESTful API deployed on{' '}
          <a
            className="underline text-lime-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://fly.io"
          >
            Fly.io
          </a>
        </li>
        <li>Mother-daughter bonding 💕</li>
            </div>
            </div>
      </div>
    </div>
  );
}
