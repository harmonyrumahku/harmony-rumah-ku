interface Information {
  name: string;
  intro: string;
  years: string;
  location: string;
  deskripsi: string;
}

interface TimelineItem {
  image: string[];
  label: string;
  title: string;
  deskripsi: string;
}

interface TeamMember {
  name: string;
  position: string;
}

interface ProyekDetails {
  title: string;
  information: Information[];
  proyek_layanan_name: string[];
  timeline: TimelineItem[];
  deadline: string;
  image_urls: string[];
  proyek_type_name: string;
  proyek_city_name: string;
  bedroom_count: number;
  surface_area: string;
  bathroom_count: number;
  garage_count: number;
  layanan: string;
  team: TeamMember[];
  template_message: string;
  content: string | null;
  type: string;
  city: string;
  slug: string;
}

interface ProyekHome {
  title: string;
  image_urls: string;
  layanan: string;
  type: string;
  city: string;
  slug: string;
  created_at?: string; // ISO date string if provided by API
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

// Response untuk list/array proyek (halaman daftar)
type ProyekListResponse = ApiResponse<ProyekDetails[]>;

// Response untuk single proyek (halaman detail)
type ProyekDetailResponse = ApiResponse<ProyekDetails>;

// Response untuk proyek home (data yang ditampilkan di homepage)
type ProyekHomeResponse = ApiResponse<ProyekHome[]>;

//=================== Proyek Card =================//
type ProjectCardProps = {
  project: ProyekHome;
  idx: number;
  onLinkClick: (title?: string) => void;
};