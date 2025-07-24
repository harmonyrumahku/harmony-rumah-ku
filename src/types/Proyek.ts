export interface Proyek {
  id: number;
  title: string;
  description: string;
  slug: string;
  image_urls: string[];
  content: string;
  status: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  display_name: string;
  photo_url: string;
  bedroom_count: number;
  surface_area: string;
  bathroom_count: number;
  type: string;
  city: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

export type ProyekResponse = ApiResponse<Proyek[]>;
