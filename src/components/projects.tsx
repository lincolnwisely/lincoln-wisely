import ProjectCard from './ProjectCard';
import vhs_chips from '../app/fixtures/vhs_chips.json';
import mern_chips from '../app/fixtures/mern_chips.json';
import flutter_chips from '../app/fixtures/flutter_chips.json';

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Digitizing Home Videos"
          description="As the self-proclaimed Family Historian, I have embarked on the
            greatly rewarding task of digitizing and hosting our
            home videos."
          data={vhs_chips.chips}
        />

        <ProjectCard
          title="Sharon Wisely Jewelry"
          description="Features user authentication w/ JWT tokens, product management and Stripe payments integration."
          data={mern_chips.chips}
          links={[
            {
              url: 'https://github.com/lincolnwisely/sw-jewelry',
              image: '/img/github.png',
              label: 'source',
            },
          ]}
        />

        <ProjectCard
          title="Flutter App"
          description="Leveraging AI models for image analysis and facial recognition to solve the most critical first-world problems. Project for learning only."
          data={flutter_chips.chips}
          links={[
            {
              url: 'https://github.com/lincolnwisely/flutter_app',
              image: '/img/github.png',
              label: 'source',
            },
          ]}
        />
      </div>
    </div>
  );
}
