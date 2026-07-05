import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-stone-50 dark:bg-stone-950">
      <Header />
      <main className="flex flex-1 items-center justify-center px-8">
        <h1 className="text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl dark:text-stone-50">
          FridgeChef
        </h1>
      </main>
    </div>
  );
}
