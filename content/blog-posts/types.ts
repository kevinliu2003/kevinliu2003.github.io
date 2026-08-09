export interface LocalizedText {
  en: string
  zh: string
}

export interface BlogPost {
  id: string
  slug: string
  title: LocalizedText
  date: string
  tags: string[]
  excerpt: LocalizedText
  markdown: string
}
