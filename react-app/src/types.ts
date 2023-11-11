export type DefaultProps = {};

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

export type Result = {
  url: string;
  name: string;
  desc: string;
};

export type SearchResults = {
  results: Result[];
  // prev: string;
  // next: string;
};

export type RunSearch = {
  runSearch: (value: string) => void;
  testError: () => void;
};

export type PropsWrapper = {
  page: string;
}

export type PropsBottom = {
  results: Result[];
  page: string;  
}

export type PropsPagination = {
  page: string;  
}
