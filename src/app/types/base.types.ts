export type TCatsListResponse = {
  categories?: TCatCategoty[];
  height: number;
  width: number;
  url: string;
  id: string;
  breeds?: [];
};

export type TCatCategoty = {
  name: string;
  id: number;
};

export type TQueryParams = {
  has_breeds?: string;
  breed_ids?: string;
  limit?: string;
  page?: string;
};

export type TRequestSearchData = {
  has_breeds?: string;
  breed_ids?: string;
  limit?: number;
  page?: number;
};
