import ParableCard from "./components/ParableCard";
import parables from "./data/parables";

function App() {
  return (
    <>
      <div className="flex h-[500px] w-full items-center justify-center bg-[url('/images/hero.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto p-6 text-center text-white">
          <h1 className="mb-2 text-5xl">
            <span className="fade-in" style={{ animationDelay: "150ms" }}>
              The
            </span>
          </h1>
          <h1 className="text-[64px] leading-none">
            <span className="fade-in" style={{ animationDelay: "400ms" }}>
              Parables
            </span>{" "}
            <span className="fade-in" style={{ animationDelay: "650ms" }}>
              of
            </span>{" "}
            <span className="fade-in" style={{ animationDelay: "900ms" }}>
              Jesus
            </span>
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
