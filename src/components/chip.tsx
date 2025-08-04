export default function Chip({ label }: { label: string }) {
  return (
    <div className="flex items-center bg-indigo-500 text-white text-sm font-medium px-2.5 py-0.5 rounded-full">
      {label}
    </div>
  );
}