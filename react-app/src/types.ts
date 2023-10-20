export type DefaultProps = {
}

export type ApiResult = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  url: string;
};

export type SearchResult = {
  url: string;
  name: string;
  desc: string;
};

export type SearchResults = {
  searchResults: SearchResult[]
};

export type RunSearch = {
  runSearch: (value: string) => void;
  testError: () => void;
};
