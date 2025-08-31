export interface ListItem {
  description: string;
}

export interface TypeItem {
  title: string;
  description: string;
}

export interface BudayaData {
  title: string;
  description: string;
  span: string;
  list: ListItem[];
  text: string;
  type: TypeItem[];
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type AboutBudayaResponse = ApiResponse<BudayaData[]>;
