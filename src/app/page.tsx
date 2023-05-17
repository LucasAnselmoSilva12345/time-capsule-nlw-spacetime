import LeftSection from "./components/LeftSection";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftSection />

      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You not have any memories yet, start{" "}
            <a href="#" className="underline hover:text-gray-50">
              creating now
            </a>
            !
          </p>
        </div>
      </section>
    </main>
  );
}
