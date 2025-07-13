export interface SocialMedia {
    id: number;
    title: string;
    url: string;
    icons: string;
}

export interface ApiResponse<T> {
    statusCode: number;
    statusMessage: string;
    message: string;
    ok: boolean;
    data: T;
}

export type SocialMediaResponse = ApiResponse<SocialMedia[]>;