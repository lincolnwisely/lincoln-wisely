

export default function Banner({ message }: { message: string }) {
  return (
    <div className="bg-indigo-500 text-white w-screen flex justify-center">
      <h5 className="text-center p-2">{message}</h5>
    </div>
  );
}