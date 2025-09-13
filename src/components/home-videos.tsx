export default function HomeVideos() {
  return (
    <div className="font-medium w-full lg:w-1/2 lg:pr-8">
      <div className="flex flex-row">
        <h2 className="font-bold text-xl text-lime-300 mr-4">
          Digitizing Home Videos
        </h2>
        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text--400 inset-ring inset-ring-yellow-400/20">
          In-Progress
        </span>
      </div>
      <p>
        As the self-proclaimed Family Historian, I have embarked on the
        greatly rewarding task of digitizing and hosting our
        home videos.
      </p>
      <div className="p-8 font-medium">
        <li className="pb-4">
          I use{' '}
          <a
            className="underline text-lime-300"
            href="https://www.clearclick.com/products/video-to-usb-audio-video-capture-live-streaming-device"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClearClick
          </a>{' '}
          and{' '}
          <a
            className="underline text-lime-300"
            href="https://obsproject.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OBS Studio software
          </a>{' '}
          to create digital files from VHS tapes.
        </li>
        <li className="pb-4">
          I use{' '}
          <a
            className="underline text-lime-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linux.die.net/man/1/mkvmerge"
          >
            mkvmerge cli tool{' '}
          </a>
          to embed a <code className="text-lime-200">chapters.txt</code> file
          into the <code className="text-lime-200">.mkv</code> video file. (If
          anyone knows of a tool for generating chapter timestamps, hit me up.)
        </li>
        <li className="pb-4">
          I host all of the files on my media server at my house and manage it
          with{' '}
          <a
            href="https://unraid.net/"
            className="underline text-lime-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unraid OS.
          </a>
        </li>
      </div>
    </div>
  );
}
