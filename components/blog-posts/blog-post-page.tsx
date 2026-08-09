"use client"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import type { BlogPost } from "@/content/blog-posts"
import { BlogPostArticle } from "./blog-post-article"

export function BlogPostPage({ post }: { post: BlogPost }) {
  const router = useRouter()
  const { language } = useLanguage()
  const languageKey = language === "en" ? "en" : "zh"

  return (
    <BlogPostArticle
      post={post}
      language={languageKey}
      onBack={() => router.push("/blogs")}
    />
  )
}
