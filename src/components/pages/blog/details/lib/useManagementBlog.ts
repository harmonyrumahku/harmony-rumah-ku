import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

export const useManagementBlog = (articleData: ArticleDetails) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previousArticle, setPreviousArticle] = useState<Article | null>(null);

  // Fetch all articles to find the previous one
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        if (response.ok) {
          const data = await response.json();
          const articles = data.data || [];

          // Find current article index
          const currentIndex = articles.findIndex(
            (article: Article) => article.slug === articleData.slug
          );

          // Set previous article if exists (next in array since newest articles are first)
          if (currentIndex < articles.length - 1) {
            const prevArticle = articles[currentIndex + 1];
            setPreviousArticle(prevArticle);
          }
        } else {
          // Handle error silently
        }
      } catch {
        // Handle error silently
      }
    };

    fetchArticles();
  }, [articleData.slug]);

  const handlePreviousArticle = () => {
    if (previousArticle && !isLoading) {
      setIsLoading(true);
      router.push(`/blog/${previousArticle.slug}`);
    }
  };

  // Function to parse HTML content and extract structured data
  const parseArticleContent = (htmlContent: string) => {
    // Remove HTML tags and extract clean text
    const cleanText = htmlContent
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Extract paragraphs with their styling information
    const paragraphs =
      htmlContent
        .match(/<p[^>]*>(.*?)<\/p>/g)
        ?.map((p) => {
          const text = p.replace(/<[^>]*>/g, "").trim();
          const hasStrong = p.includes("<strong>");
          const hasCenterAlign = p.includes("ql-align-center");
          return { text, isBold: hasStrong, centerAlign: hasCenterAlign };
        })
        .filter(
          (p) => p.text.length > 0 && p.text !== "<br>" && p.text !== ""
        ) || [];

    // Use all paragraphs without filtering duplicates
    const uniqueParagraphs = paragraphs;

    return {
      cleanText,
      paragraphs: uniqueParagraphs,
      wordCount: cleanText.split(" ").length,
    };
  };

  // Parse the article content
  const parsedContent = parseArticleContent(articleData.content);

  // Split all paragraphs into two parts for two-column layout
  // Ensure right column has enough content
  const totalParagraphs = parsedContent.paragraphs.length;
  const leftColumnCount = Math.min(8, Math.ceil(totalParagraphs * 0.6)); // Left column gets 60% or max 8 paragraphs
  const leftColumnContent = parsedContent.paragraphs.slice(0, leftColumnCount);
  const rightColumnContent = parsedContent.paragraphs.slice(leftColumnCount);

  return {
    isLoading,
    previousArticle,
    handlePreviousArticle,
    parsedContent,
    leftColumnContent,
    rightColumnContent,
  };
};
