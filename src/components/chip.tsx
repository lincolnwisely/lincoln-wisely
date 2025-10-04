export default function Chip({
  label,
  url,
  color = 'bg-indigo-400',
  hoverColor = 'bg-indigo-500',
  textSize = 'text-xs',
}: {
  label: string;
  url: string;
  color?: string;
  hoverColor?: string;
  textSize?: string;
}) {
  return (
    <div
      className={`flex items-center ${color} text-white ${textSize} font-medium px-2.5 py-0.5 rounded-full hover:${hoverColor}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
}
