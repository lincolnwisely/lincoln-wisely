import Chip from './chip';
import { Chip as tChip } from '@/app/fixtures/types';
import { Link } from '@/app/fixtures/types';
import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  data,
  links,
}: {
  title: string;
  description: string;
  data: tChip[];
  links?: Link[];
}) {
  return (
    <div className=" h-full border rounded-lg">
      <div className="p-2 flex flex-col justify-between h-full">
        <div className="p-2 font-medium">
          <h2 className="font-bold text-xl text-lime-200">{title}</h2>
          <br />
          <p>{description}</p>
          <br />
        </div>
        <div className="p-4">
          {/* Chips  */}
          {data && data.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.map((chip: tChip, chipIndex: number) => (
                <div key={chipIndex}>
                  <Chip
                    label={chip.label}
                    url={chip.url}
                    color="bg-lime-800"
                    hoverColor="bg-lime-900"
                    textSize="s"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {links && links.length > 0 ? (
          <div className="flex flex-row justify-center">
            {links.map((link: Link, linkIndex: number) => (
              <div key={linkIndex}>
                {link.image ? (
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 px-2"
                    href={link.url}
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
                  </a>
                ) : (
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 px-2"
                    href="https://sharonwisely.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
