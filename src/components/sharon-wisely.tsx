export default function SharonWisely() {
  return (
    <div className="font-medium w-full lg:w-1/2 lg:pr-8">
      <h2 className="font-bold text-xl text-lime-300">Sharon Wisely Jewelry</h2>
      <p>
        Full-stack e-commerce site for my mom to replace her use of Etsy, which
        has an unreliable algorithm and high operations costs.{' '}
        <a
          href="https://sw-jewelry-client.vercel.app/"
          className="underline text-lime-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Still in progress
        </a>
        .
      </p>
      <div className="p-8 font-medium">
        <li className="pb-4">
          Built with MongoDB, Express, React, and Node.js
        </li>
        <li className="pb-4">
          To feature user authentication, product management, user auth with JWT
          tokens, account management and Stripe payments integration
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
