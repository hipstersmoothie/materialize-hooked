declare module 'bulma-pagination-react' {
  export function getVisiblePages(
    visibleRadius: number,
    currentPage: number,
    page: number
  ): number[];
}
