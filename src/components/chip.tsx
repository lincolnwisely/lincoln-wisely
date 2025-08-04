export default function Chip({ label, url }: { label: string, url: string }) {
  return (
    <div className="flex items-center bg-indigo-500 text-white text-sm font-medium px-2.5 py-0.5 rounded-full hover:bg-indigo-600">
      <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
    </div>
  );
}