"use server";

import { createClient } from "redis";
import { randomBytes } from "crypto";

export async function shorten(formData: FormData) {
  const url = formData.get("url");

  if (!url || typeof url !== "string") {
	throw new Error("Invalid URL");
  }

  const client = createClient();
  await client.connect();

  const key = randomBytes(5).toString("hex")
  await client.set(key, url);

  const value = await client.get(key);
  console.log('saved url:', value);
}
