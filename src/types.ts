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
  name: string;
  desc: string;
  url: string;
};

export type Person = {
  name: string;
  desc: string;
  url: string;
  birth_year: string;
  height: string;
  mass: string;
  skin_color: string;
  hair_color: string;
  eye_color: string;
};

export type SearchResults = {
  results: Result[];
};

export type RunSearch = {
  testError: () => void;
};

export interface IPropsResult {
  result: Result;
  page: string;
}

export interface IPropsPagination {
  page: string;
}

export type StateSlice = {
  inputValue: string;
  page: string;
  limit: string;
  isLoadingList: boolean;
  isLoadingDetails: boolean;
  apiResults: ApiResult[];
  results: Result[];
};
