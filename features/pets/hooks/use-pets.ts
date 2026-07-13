import { api } from "@/lib/api/react-query";

export function usePets() {
  return api.useQuery("get", "/pets", {
  });
}