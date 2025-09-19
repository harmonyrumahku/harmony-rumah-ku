interface Jasa {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  image_urls: string;
  created_at: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type JasaResponse = ApiResponse<Jasa[]>;
