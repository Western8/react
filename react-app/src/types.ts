export type ApiResult = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
};

export type SearchResult = {
  name: string;
  desc: string;
};

export type SearchResults = {
  searchResults: SearchResult[]
};

export type RunSearch = {
  runSearch: (value: string) => void;
};
