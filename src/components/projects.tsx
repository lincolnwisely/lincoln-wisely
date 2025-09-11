import HomeVideos from './home-videos';
import SharonWisely from './sharon-wisely';

export default function Projects() {
  return (
    <div className="flex flex-col lg:flex-row">
      <HomeVideos />
      <SharonWisely />
    </div>
  );
}
