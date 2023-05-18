import EmptyMemories from "@/components/EmptyMemories";
import LeftSection from "@/components/LeftSection";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftSection />

      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </section>
    </main>
  );
}
