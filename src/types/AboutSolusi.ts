export interface Category {
  title: string;
}

export interface AboutSolusi {
  title: string;
  span: string;
  image_urls: string;
  title_category: string;
  design_plan: string;
  engineering_plan: string;
  management_plan: string;
  design: Category[];
  engineering: Category[];
  management: Category[];
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type AboutSolusiResponse = ApiResponse<AboutSolusi[]>;
