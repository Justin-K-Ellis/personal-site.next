export default function Title({ text }: { text: string }) {
  return (
    <h2 className="font-bold text-center text-2xl md:text-4xl mt-1 mb-4">
      {text}
    </h2>
  );
}
