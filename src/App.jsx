import ParableCard from "./components/ParableCard";
import parables from "./data/parables";

function App() {
  return (
    <>
      <div className="flex h-[500px] w-full items-center justify-center bg-[url('/images/hero.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto p-6 text-center text-white">
          <h1
            className="fade-in mb-2 text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            The
          </h1>
          <h1
            className="fade-in text-[64px] leading-none"
            style={{ animationDelay: "100ms" }}
          >
            Parables of Jesus
          </h1>
        </div>
      </div>
      <main className="w-full">
        {/* Book of Matthew */}
        <section className="mx-auto max-w-2xl py-20">
          <div className="container mx-auto flex flex-col gap-16 px-6">
            {parables.map((parable, i) => (
              <ParableCard key={parable.id} {...parable} eager={i === 0} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
