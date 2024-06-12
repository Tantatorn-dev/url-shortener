"use server";

import { createClient } from "redis";
import { randomBytes } from "crypto";

export async function shorten(
  currentState: { url: string },
  formData: FormData
) {
  const url = formData.get("url");

  if (!url || typeof url !== "string") {
    throw new Error("Invalid URL");
  }

  const client = createClient();
  await client.connect();

  const key = randomBytes(5).toString("hex");
  await client.set(key, url);

  return { url: `localhost:3000/${key}` };
}
