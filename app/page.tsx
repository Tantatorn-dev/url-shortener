import { shorten } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10">URL Shortener</h1>
      <form action={shorten} className="flex flex-row justify-center w-full gap-5">
        <input
          name="url"
          type="text"
          placeholder="Type URL here"
          className="input input-bordered w-full max-w-xl"
        />
        <button type="submit" className="btn btn-primary">Shorten</button>
      </form>
    </main>
  );
}
