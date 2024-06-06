import { SearchReturnType } from "@/types/Search";

export interface SearchState {
  results: SearchReturnType | null;
  loading: boolean;
}
