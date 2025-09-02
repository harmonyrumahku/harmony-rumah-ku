// Awards Types
export interface Award {
  id: number;
  name: string;
  description: string;
  keterangan: string;
  slug: string;
  avatar: string;
  status: "published" | "draft" | "archived";
  created_at: string;
}

export interface AwardsResponse {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: Award[];
}

// Awards Details
export interface AwardDetail {
  title: string;
  slug: string;
  name: string;
  description: string;
  keterangan: string;
  avatar: string;
  content: string;
  image_urls: string[];
  status: "published" | "draft" | "archived";
  created_at: string;
  updated_at: string;
}

export interface AwardDetailResponse {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: AwardDetail;
}
