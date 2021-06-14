import { useRouter } from "next/router";
import { useContent } from "../context/ContentProvider";

export const useSinglePageContent = () => {
  const { query } = useRouter();
  const { getFurnitureById } = useContent();

  return getFurnitureById(query.id);
};
