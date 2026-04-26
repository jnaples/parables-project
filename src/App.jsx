import ParableCard from "./components/ParableCard";
import parables from "./data/parables";

function App() {
  return (
    <>
      <div className="flex h-[500px] w-full items-center justify-center bg-[url('/images/hero.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto p-6 text-center text-white">
          <h1 className="text-5xl">
            <span className="fade-in" style={{ animationDelay: "0ms" }}>
              The
            </span>
          </h1>
          <h1 className="text-[64px] leading-none">
            <span className="fade-in" style={{ animationDelay: "220ms" }}>
              Parables of Jesus
            </span>
          </h1>
        </div>
      </div>
      <main className="w-full px-6 py-20">
        <section className="mx-auto max-w-2xl">
          <div className="container mx-auto flex flex-col gap-16">
            {parables.map((parable) => (
              <ParableCard key={parable.id} {...parable} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
