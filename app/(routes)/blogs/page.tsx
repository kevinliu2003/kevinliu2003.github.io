"use client"

import { useState } from "react"
import Link from "next/link"
import { BLOG_POSTS } from "@/content/blog-posts"
import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Pencil,
} from "lucide-react"

interface Tag {
  id: string
  name: {
    en: string
    zh: string
  }
}

const TAGS: Record<string, Tag> = {
  experience: {
    id: "experience",
    name: {
      en: "Experience",
      zh: "经验",
    },
  },
  expression: {
    id: "expression",
    name: {
      en: "Expression",
      zh: "表达",
    },
  },
}

function getTagIcon(tagId: string) {
  switch (tagId) {
    case "experience":
      return <BookOpen className="h-3 w-3" />
    case "expression":
      return <Pencil className="h-3 w-3" />
    default:
      return null
  }
}

export default function BlogPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const languageKey = language === "en" ? "en" : "zh"

  const allTagIds = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)))

  const filteredPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => {
      const title = post.title[languageKey].toLowerCase()
      const excerpt = post.excerpt[languageKey].toLowerCase()
      const query = searchQuery.toLowerCase()
      const matchesSearch = title.includes(query) || excerpt.includes(query)
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true

      return matchesSearch && matchesTag
    })

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{languageKey === "en" ? "Blogs" : "博客"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {languageKey === "en"
              ? "Writing, notes, and practical guides."
              : "记录阅读、思考与实践经验。"}
          </p>
        </div>

        <Input
          type="search"
          placeholder={languageKey === "en" ? "Search posts..." : "搜索文章..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "outline"}
          className="cursor-pointer rounded-full px-3 py-1"
          onClick={() => setSelectedTag(null)}
        >
          {languageKey === "en" ? "All" : "全部"}
        </Badge>
        {allTagIds.map((tagId) => (
          <Badge
            key={tagId}
            variant={selectedTag === tagId ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1"
            onClick={() => setSelectedTag(tagId)}
          >
            {TAGS[tagId]?.name[languageKey] ?? tagId}
          </Badge>
        ))}
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="group overflow-hidden">
            <Link
              href={`/blogs/${post.slug}`}
              className="block w-full p-6 text-left sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                {post.title[languageKey]}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tagId) => (
                  <Badge key={tagId} variant="outline" className="rounded-full bg-background/80 px-3 py-1">
                    <span className="flex items-center gap-1.5">
                      {getTagIcon(tagId)}
                      <span>{TAGS[tagId]?.name[languageKey] ?? tagId}</span>
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString(languageKey === "en" ? "en-US" : "zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {post.excerpt[languageKey]}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                {languageKey === "en" ? "Read more" : "阅读更多"}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </Card>
        ))}

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="py-14 text-center">
              <p className="text-muted-foreground">
                {languageKey === "en" ? "No posts found." : "未找到文章。"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}


