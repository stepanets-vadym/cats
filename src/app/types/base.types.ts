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
