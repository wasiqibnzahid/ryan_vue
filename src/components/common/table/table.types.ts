export interface Column<T> {
  name: string;
  accessor: keyof T;
}
