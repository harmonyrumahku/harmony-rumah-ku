export interface Contact {
  id: number;
  title: string;
  text: string;
  label: string;
  url: string;
  image_urls: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type ContactResponse = ApiResponse<Contact[]>;
