export interface Category {
  title: string;
}

export interface City {
  title: string;
  number: string;
}

export interface AboutPages {
  number: string;
  description: string;
  image_urls: string;
  title: string;
  category: Category[];
  city: City[];
  award: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type AboutPagesResponse = ApiResponse<AboutPages[]>;
