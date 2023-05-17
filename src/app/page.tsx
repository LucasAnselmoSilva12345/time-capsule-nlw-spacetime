import LeftSection from "./components/LeftSection";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftSection />

      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="#" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </section>
    </main>
  );
}
