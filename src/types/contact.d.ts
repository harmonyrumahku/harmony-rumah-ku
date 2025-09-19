interface Contact {
  id: number;
  title: string;
  text: string;
  label: string;
  url: string;
  image_urls: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type ContactResponse = ApiResponse<Contact[]>;

interface ContactFormData {
  nama_lengkap: string;
  email: string;
  kebutuhan: string;
}

interface ContactRecord {
  id: string;
  nama_lengkap: string;
  email: string;
  kebutuhan: string;
  status: "read" | "unread";
  created_at: string;
  updated_at: string;
}