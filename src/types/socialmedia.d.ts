interface SocialMedia {
  id: number;
  title: string;
  url: string;
  icons: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type SocialMediaResponse = ApiResponse<SocialMedia[]>;
