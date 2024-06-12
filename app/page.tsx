"use client";

import { useFormState } from "react-dom";
import { shorten } from "./actions";

export default function Home() {
  const [state, formAction] = useFormState(shorten, { url: "" });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-10">URL Shortener</h1>
      <form
        action={formAction}
        className="flex flex-row justify-center w-full gap-5"
      >
        <input
          name="url"
          type="text"
          placeholder="Type URL here"
          className="input input-bordered w-full max-w-xl"
        />
        <button type="submit" className="btn btn-primary">
          Shorten
        </button>
      </form>
      {state.url && <p className="mt-10">{state.url}</p>}
    </main>
  );
}
