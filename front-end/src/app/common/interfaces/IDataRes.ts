export interface IDataRes {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  prevPage: number;
  nextPage: number;
  limit: number;
  offset: number;
  page: number;
  pagingCounter: number;
  totalDocs: number;
  totalPages: number;
  docs: [];
}
