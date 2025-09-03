// Awards Types
export interface Award {
  id: number;
  name: string;
  description: string;
  keterangan: string;
  slug: string;
  avatar: string;
  after: string;
  status: "published" | "draft";
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
export interface AwardDetails {
  title: string;
  slug: string;
  name: string;
  description: string;
  keterangan: string;
  avatar: string;
  content: string;
  youtube_url: string;
  after: string[];
  before: string[];
  status: "published" | "draft";
  created_at: string;
  updated_at: string;
}

export interface AwardDetailsResponse {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: AwardDetails;
}
