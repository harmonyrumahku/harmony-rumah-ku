export interface AboutType {
  title: string;
}

export interface About {
  description: string;
  image_urls: string;
  type: AboutType[];
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type AboutResponse = ApiResponse<About[]>;
