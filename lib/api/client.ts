import createClient from "openapi-fetch";
import type { paths } from "./schema";

export const client = createClient<paths>({
  baseUrl: "http://127.0.0.1:3658/m1/1334214-1335542-default",
});