export default function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        You not have any memories yet, start{" "}
        <a href="#" className="underline hover:text-gray-50">
          creating now
        </a>
        !
      </p>
    </div>
  );
}
