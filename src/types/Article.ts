export interface Article {
    id: number;
    title: string;
    description: string;
    slug: string;
    thumbnail: string;
    article_categories: string;
    article_sub_categories: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    statusCode: number;
    statusMessage: string;
    message: string;
    ok: boolean;
    data: T;
}

export type ArticlesResponse = ApiResponse<Article[]>;

// Article By Slug

export interface ArticleDetails {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    thumbnail: string[];
    status: string;
    article_categories: string;
    article_sub_categories: string;
    created_at: string;
    updated_at: string;
}


export type ArticleDetailsResponse = ApiResponse<ArticleDetails>;