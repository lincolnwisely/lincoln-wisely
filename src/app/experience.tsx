import Image from "next/image";
import data from "./fixtures/data.json";

interface Client {
  name: string;
  logo: string | null;
}

interface ExperienceItem {
  title: string;
  description: string;
  logo: string | null;
  clients: Client[];
}

export default function Experience() {
  const { experience } = data;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((item: ExperienceItem, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Company Header */}
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>

            {/* Clients Section */}
            {item.clients && item.clients.length > 0 && (
              <div className="flex justify-center">
                {/* <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Clients & Projects
                </h4> */}
                <div className="space-y-2 flex items-center">
                  {item.clients.map((client: Client, clientIndex: number) => (
                    <div
                      key={clientIndex}
                      className=" gap-2 m-2 text-sm justify-center items-center"
                    >
                      {client.logo ? (
                        <div className="w-auto">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            width={80}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-100 rounded justify-center">
                          <span className="text-gray-400 text-xs">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      {/* <span className="text-gray-600">{client.name}</span> */}
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
