import Image from 'next/image';
import Link from 'next/link';

export default function DesignPage() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Header */}
      <header className="mb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-mono font-bold mb-4">Design Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of original design work from college.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="space-y-16">
        {/* Web Design */}
        <section>
          <h2 className="font-mono font-bold text-2xl mb-8">Original Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Depression and Anxiety PSA',
                description:
                  'College assignment to create a PSA about depression and anxiety for a local mental health organization.',
                src: '/img/gallery-depression.jpg',
              },
              {
                title: 'Lincoln Mantra',
                description: 'Everyone needs a mantra. This is mine.',
                src: '/img/gallery-lincoln.jpg',
              },
              {
                title: 'Zurick',
                description:
                  'Restaurant concept - branding, advertising, menu and web design',
                src: '/img/gallery-zurick.jpg',
              },
              {
                title: 'Trioomphant Chocolate',
                description:
                  'Concept, branding and package design for a fictional chocolate company.',
                src: '/img/gallery-trioomphant.jpg',
              },
              {
                title: 'Dumb infographic',
                description: 'Is this the most 2010 thing ever?',
                src: '/img/gallery-info.jpg',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg text-gray-300 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <Image
                  src={project.src}
                  alt={project.title}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className=" p-8 text-center">
          <h2 className="font-mono text-whitefont-bold text-2xl mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            I&#39;m always open to discussing new design and development
            opportunities. Let&#39;s create something amazing together.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  );
}
