export default function SharonWisely() {
  return (
    <div className="font-medium w-full lg:w-1/2 lg:pr-8">
      <div className="flex flex-row">
        <h2 className="font-bold text-xl text-lime-300 mr-4">
          Sharon Wisely Jewelry
        </h2>
        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text--400 inset-ring inset-ring-yellow-400/20">
          In-Progress
        </span>
      </div>
      <p>
        I decided to build a site that can replace my mom&#39;s use of Etsy,
        which has an unreliable algorithm and high operations costs. Follow
        along{' '}
        <a
          href="https://sw-jewelry-client.vercel.app/"
          className="underline text-lime-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className="p-8 font-medium">
        <li className="pb-4">
          Built with MongoDB, Express, React, and Node.js
        </li>
        <li className="pb-4">
          Features user authentication w/ JWT tokens, product management and
          Stripe payments integration
        </li>
        <li className="pb-4">
          CI/CD pipeline for simplified deployments on{' '}
          <a
            className="underline text-lime-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com"
          >
            Vercel
          </a>
        </li>
        <li className="pb-4">
          Custom RESTful API deployed on{' '}
          <a
            className="underline text-lime-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://fly.io"
          >
            Fly.io
          </a>
        </li>
        <li className="pb-4">
          Claude Code for road map and development assistance
        </li>
        <li className="pb-4">Mother-daughter bonding 💕</li>
      </div>
    </div>
  );
}
