import Image from 'next/image';
import vhs_chips from '../app/fixtures/vhs_chips.json'
import Chip from './chip';
import { Chip as tChip } from '@/app/fixtures/types';

export default function HomeVideos() {
  return (
    <div className="font-medium w-full m:w-1/2 md:pr-8 flex-1">
      <div className="flex flex-col h-full border rounded-lg overflow-hidden justify-around">
        <div>

          <Image className="object-cover" src={'/img/editing.png'}
            width={300}
            height={300}
            layout='responsive'
            alt="photo of editing station"
          />
        </div>


        <div className="p-4 flex-column justify-around">

          <div className="p-4 font-medium">
            <h2 className="font-bold text-xl text-lime-200">
              Digitizing Home Videos
              <span className="inline-flex items-center rounded-md bg-yellow-400/10 ml-4 px-2 py-1 text-xs font-medium text--400 inset-ring inset-ring-yellow-400/20">
                In-Progress
              </span>
            </h2>
            <br />

            <p>
              As the self-proclaimed Family Historian, I have embarked on the
              greatly rewarding task of digitizing and hosting our
              home videos.
            </p>
            <br />
            <p>(If
              anyone knows of a tool for generating chapter timestamps, hit me up.)</p>
            <br />
            <br />



          </div>
          <div className="p-4">
            {/* Chips  */}
            {vhs_chips.chips && vhs_chips.chips.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {vhs_chips.chips.map((chip: tChip, chipIndex: number) => (
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

          </div>
        </div>
      </div>
    </div>
  );
}
