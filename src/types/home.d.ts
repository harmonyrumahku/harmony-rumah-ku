interface Home {
  title: string;
  description: string;
  text: string;
  image_urls: string;
  logo: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type HomeResponse = ApiResponse<Home[]>;
