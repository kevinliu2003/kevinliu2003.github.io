"use client"

import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/content/blog-posts"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function normalizeCodeBlock(content: string) {
  const lines = content.replace(/\n$/, "").split("\n")

  while (lines[0] === "") {
    lines.shift()
  }

  while (lines[lines.length - 1] === "") {
    lines.pop()
  }

  return lines.filter((line, index) => !(line === "" && lines[index - 1] === "")).join("\n")
}

export function BlogPostArticle({
  post,
  language,
  onBack,
}: {
  post: BlogPost
  language: "en" | "zh"
  onBack: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <Button variant="ghost" className="mb-6 gap-2 px-2" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        {language === "en" ? "Back to all posts" : "返回所有文章"}
      </Button>

      <article className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mt-0 text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                      {children}
                    </h1>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-10 text-lg font-semibold tracking-tight">
                      {children}
                    </h3>
                  ),
                  h5: ({ children }) => (
                    <h2 className="mt-14 border-l-4 border-foreground/15 pl-4 text-lg font-semibold tracking-tight sm:text-2xl">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="mt-5 text-[15px] leading-8 text-foreground/85 sm:text-base">
                      {children}
                    </p>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src ?? ""}
                      alt={alt ?? ""}
                      className="mt-6 w-full rounded-2xl border border-border/70 bg-muted/30 object-cover shadow-sm"
                    />
                  ),
                  ul: ({ children }) => (
                    <ul className="mt-5 space-y-3 pl-6 text-[15px] leading-8 marker:text-foreground/35 sm:text-base">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => <li className="pl-1">{children}</li>,
                  pre: ({ children }) => (
                    <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-sm leading-7 text-slate-100 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.9)]">
                      {children}
                    </pre>
                  ),
                  code: ({ className, children, ...props }) => {
                    const codeContent = String(children)
                    const isBlock = Boolean(className) || codeContent.includes("\n")

                    if (!isBlock) {
                      return (
                        <code
                          className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
                          {...props}
                        >
                          {children}
                        </code>
                      )
                    }

                    return (
                      <code className={cn("font-mono text-[13px] sm:text-sm", className)} {...props}>
                        {normalizeCodeBlock(codeContent)}
                      </code>
                    )
                  },
                  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                }}
              >
                {post.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
