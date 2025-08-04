import Image from "next/image";
import data from "../app/fixtures/data.json";

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
}

export default function Experience() {
  const { experience } = data;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((item: ExperienceItem, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
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
              <div className="flex justify-center">
                <div className="space-y-2 flex">
                  {item.clients.map((client: Client, clientIndex: number) => (
                    <div
                      key={clientIndex}
                      className=" gap-2 m-2 text-sm flex justify-end"
                    >
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            width={80}
                            height={50}
                            className="object-contain"
                          />
                      
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
