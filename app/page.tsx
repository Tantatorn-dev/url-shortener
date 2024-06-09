export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10">URL Shortener</h1>
      <form className="flex flex-row justify-center w-full gap-5">
        <input
          type="text"
          placeholder="Type URL here"
          className="input input-bordered w-full max-w-xl"
        />
        <button className="btn btn-primary">Shorten</button>
      </form>
    </main>
  );
}
