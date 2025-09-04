export default function Banner() {
  return (
    <div className="bg-indigo-500 text-white w-screen flex justify-center">
      <h5 className="text-center p-2">
        Hey everyone! I am currently seeking a new role. Reach out via the
      {' '}
                <a
          className="underline"
          href="https://lincolnwisely.com#form"
          target="_blank"
          rel="noopener noreferrer"
        >
         contact form
        </a>
        ,{' '}
        <a
          className="underline"
          href="https://www.linkedin.com/in/lincolnwisely/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ,{' '}
        <a
          className="underline"
          href="https://bsky.app/profile/lincolnwisely.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BlueSky
        </a>{' '}
        or{' '}
        <a
          className="underline"
          href="mailto:lincolnwisely@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        .
      </h5>
    </div>
  );
}
