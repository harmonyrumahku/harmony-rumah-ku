// Awards Types
interface Award {
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

interface AwardsResponse {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: Award[];
}

// Awards Details
interface AwardDetails {
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

interface AwardDetailsResponse {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: AwardDetails;
}
