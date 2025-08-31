export interface Filosofi {
  description: string;
}

export interface AboutFilosofi {
  number: string;
  description: string;
  image_urls: string;
  title: string;
  title_filosofi: string;
  filosofi: Filosofi[];
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type AboutFilosofiResponse = ApiResponse<AboutFilosofi[]>;
