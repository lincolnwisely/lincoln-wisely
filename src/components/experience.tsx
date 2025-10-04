import Image from 'next/image';
import Chip from './chip';
import data from '../app/fixtures/data.json';
import { Chip as tChip } from '@/app/fixtures/types';
interface Client {
  name: string;
  logo: string;
}

interface ExperienceItem {
  title: string;
  description: string;
  logo: string | null;
  clients: Client[];
  url: string;
  chips: tChip[];
}

export default function Experience() {
  const { experience } = data;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((item: ExperienceItem, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-around"
          >
            {/* Company Header */}
            <div className="flex items-center gap-3 mb-4">
              <div>
                <a
                  className="hover:underline text-indigo-500"
                  href={item.url}
                  target="_blank"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </a>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>

            {/* Logos  */}
            {item.clients && item.clients.length > 0 && (
              <div className="pb-5">
                <div className="flex justify-center">
                  {item.clients.map((client: Client, clientIndex: number) => (
                    <div key={clientIndex} className=" gap-2 m-2 flex">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={90}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chips  */}
            {item.chips && item.chips.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {item.chips.map((chip: tChip, chipIndex: number) => (
                  <div key={chipIndex}>
                    <Chip
                      label={chip.label}
                      url={chip.url}
                      color="bg-indigo-400"
                      hoverColor="bg-indigo-600"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
