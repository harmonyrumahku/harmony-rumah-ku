interface AboutType {
  title: string;
}

interface About {
  description: string;
  image_urls: string;
  type: AboutType[];
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type AboutResponse = ApiResponse<About[]>;

// About Budaya

interface ListItem {
  description: string;
}

interface TypeItem {
  title: string;
  description: string;
}

interface BudayaData {
  title: string;
  description: string;
  span: string;
  list: ListItem[];
  text: string;
  type: TypeItem[];
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type AboutBudayaResponse = ApiResponse<BudayaData[]>;

// About Filosofi

interface Filosofi {
  description: string;
}

interface AboutFilosofi {
  number: string;
  description: string;
  image_urls: string;
  title: string;
  title_filosofi: string;
  filosofi: Filosofi[];
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type AboutFilosofiResponse = ApiResponse<AboutFilosofi[]>;

// About Pages

interface Category {
  title: string;
}

interface City {
  title: string;
  number: string;
}

interface AboutPages {
  number: string;
  description: string;
  image_urls: string;
  title: string;
  category: Category[];
  city: City[];
  award: string;
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type AboutPagesResponse = ApiResponse<AboutPages[]>;

// About Solusi

interface Category {
  title: string;
}

interface AboutSolusi {
  title: string;
  span: string;
  image_urls: string;
  title_category: string;
  design_plan: string;
  engineering_plan: string;
  management_plan: string;
  design: Category[];
  engineering: Category[];
  management: Category[];
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  message: string;
  ok: boolean;
  data: T;
}

type AboutSolusiResponse = ApiResponse<AboutSolusi[]>;
