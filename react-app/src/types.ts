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
  name: string;
  desc: string;
  url: string;  
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

export type PropsResult = {
  result: Result;
  page: string;
  // getDetails: (url: string) => void; 
}

export type PropsPagination = {
  page: string;  
}

export type TGlobalContext = {
  contInputValue: string;
  setInputValue: (value: string) => void;
  contResults: Result[];
  setResults: (value: Result[]) => void;
}