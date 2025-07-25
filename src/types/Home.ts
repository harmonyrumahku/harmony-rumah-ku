export interface Home {
  title: string;
  description: string;
  text: string;
  image_urls: string;
  logo: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type HomeResponse = ApiResponse<Home[]>;
