import { redirect } from "next/navigation";
import { createClient } from "redis";

export async function GET(
  request: Request,
  { params }: { params: { key: string } }
) {
  const { key } = params;

  const client = createClient();

  await client.connect();

  const url = await client.get(key);

  if(!url) {
    console.log("URL not found");
    return redirect("/");
  }

  return redirect(url);
}
