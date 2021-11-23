export interface Pagination {
  // curernt page
  pageNumber: number;
  // itemsPerPage
  size: number;

  totalElements: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
