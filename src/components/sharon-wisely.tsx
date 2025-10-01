import Image from 'next/image';
import Chip from './chip';
import mern_chips from '../app/fixtures/mern_chips.json'
import { Chip as tChip } from '@/app/fixtures/types';


export default function SharonWisely() {
  return (
    <div className="font-medium w-full md:w-1/2 flex-1">
      <div className="flex flex-col h-full border rounded-lg overflow-hidden justify-around">
        <div>

          <Image className="object-cover" src={'/img/swj.png'}
            width={300}
            height={300}
            layout='responsive'
            alt="screenshot of Sharon Wisely Jewelry"
          />
        </div>

        <div className="p-4 flex flex-col">
          <div className="p-4 font-medium">
            <h2 className="font-bold text-xl text-lime-200 mr-4">
              Sharon Wisely Jewelry
              <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 ml-4 py-1 text-xs font-medium text--400 inset-ring inset-ring-yellow-400/20">
                In-Progress
              </span>
            </h2>
            <br />

            <br />
            <p>Features user authentication w/ JWT tokens, product management and Stripe payments integration.</p>
            <br />

          </div>
          <div className="p-4">

            {/* Chips  */}
            {mern_chips.chips && mern_chips.chips.length > 0 && (
              <div className="flex flex-wrap gap-2 pb-8">
                {mern_chips.chips.map((chip: tChip, chipIndex: number) => (
                  <div
                    key={chipIndex}
                  >
                    <Chip
                      label={chip.label}
                      url={chip.url}
                      color='bg-lime-800'
                      hoverColor='bg-lime-900'
                      textSize='s'
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-row justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 px-2"
                href="https://github.com/sw_jewelry/"
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

              <p>/</p>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 px-2"
                href="https://sharonwisely.com"
                target="_blank"
                rel="noopener noreferrer"
              >

                site
              </a>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
