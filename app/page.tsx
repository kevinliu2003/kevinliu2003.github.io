"use client"

import { ExternalLink, Github, Mail, Newspaper, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Avatar } from "@/components/ui/avatar"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"

interface SocialLink {
  name: string
  href?: string
  icon: "mail" | "github" | "google-scholar" | "researchgate"
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:kevin.liubingkuan@gmail.com",
    icon: "mail",
  },
  {
    name: "GitHub",
    href: "https://github.com/kevinliu2003",
    icon: "github",
  },
  {
    name: "Google Scholar",
    icon: "google-scholar",
  },
  {
    name: "ResearchGate",
    icon: "researchgate",
  },
]

const EXPEDITION_LINKS = [
  {
    href: "https://weixin.qq.com/sph/AQemXdeqpA",
    icon: "video" as const,
    en: "Fudan University WeChat Channels video",
    zh: "复旦大学微信视频号",
  },
  {
    href: "https://mp.weixin.qq.com/s/iyoJ9BQaTuvxLF9N__6JgA",
    icon: "article" as const,
    en: "Fudan University WeChat article",
    zh: "复旦大学微信公众号文章",
  },
]

export default function HomePage() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="pb-10">
      <div className="flex min-h-[calc(100vh-14rem)] items-center justify-center">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 py-10 sm:gap-10 lg:flex-row lg:gap-14">
          <div className="mb-4 flex flex-shrink-0 justify-center lg:mb-0">
            <Avatar className="h-40 w-40 border-4 border-background shadow-md sm:h-48 sm:w-48 lg:h-56 lg:w-56">
              <Image
                src="/bingkuan-liu-portrait.jpg"
                alt="Bingkuan Liu"
                width={224}
                height={326}
                priority
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
                className="h-full w-full object-cover object-[center_28%]"
              />
            </Avatar>
          </div>

          <div className="mx-auto flex max-w-xs flex-col text-center sm:max-w-xl lg:mx-0 lg:text-left">
            <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {language === "en" ? "Bingkuan Liu" : "刘炳宽（Bingkuan Liu）"}
            </h1>

            <div className="mb-4 max-w-prose text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {language === "en" ? (
                <>
                  I am a Ph.D. student in <strong>Atmospheric Science</strong> at{" "}
                  <Link
                    href="https://aos.fudan.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    Fudan University
                  </Link>
                  , after earning a B.S. in Mathematics-Computer Science from UC San Diego. My recent work focuses on{" "}
                  <strong>subseasonal Antarctic sea-ice prediction, physical predictability, and AI-based forecasting</strong>.
                </>
              ) : (
                <>
                  我目前在
                  <Link
                    href="https://aos.fudan.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    复旦大学
                  </Link>
                  攻读<strong>大气科学博士</strong>，本科毕业于加州大学圣地亚哥分校数学-计算机科学专业。近期研究聚焦
                  <strong>南极海冰次季节预测、物理可预报性与 AI 预报方法</strong>。
                </>
              )}
            </div>

            <div className="mt-2 flex items-center justify-center space-x-6 lg:justify-start">
              {SOCIAL_LINKS.map((link) => {
                const icon = (
                  <>
                    {link.icon === "mail" && <Mail className="h-7 w-7" />}
                    {link.icon === "github" && <Github className="h-7 w-7" />}
                    {link.icon === "google-scholar" && (
                      <Image
                        src="/google-scholar.svg"
                        alt="Google Scholar"
                        width={28}
                        height={28}
                        sizes="28px"
                        className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
                      />
                    )}
                    {link.icon === "researchgate" && (
                      <Image
                        src="/researchgate-svgrepo-com.svg"
                        alt="ResearchGate"
                        width={28}
                        height={28}
                        sizes="28px"
                        className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
                      />
                    )}
                    <span className="sr-only">{link.name}</span>
                  </>
                )

                if (link.href) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.icon === "mail" ? undefined : "_blank"}
                      rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                      className="rounded-full border border-border p-2 transition-colors hover:bg-accent"
                    >
                      {icon}
                    </a>
                  )
                }

                return (
                  <button
                    key={link.name}
                    type="button"
                    aria-disabled="true"
                    title={`${link.name} profile is not linked yet`}
                    className="cursor-default rounded-full border border-border p-2 opacity-70"
                  >
                    {icon}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-8 max-w-4xl rounded-2xl border bg-card p-5 shadow-sm sm:p-8" id="antarctic-expedition">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {language === "en" ? "Field Experience" : "科考经历"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {language === "en" ? "China's 42nd Antarctic Scientific Expedition" : "中国第 42 次南极科学考察"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {language === "en"
              ? "March 13 - April 29, 2026 · Aboard the research icebreaker Xuelong 2"
              : "2026年03月13日 - 04月29日 · 随“雪龙 2”号科考船参加南极科考"}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border bg-background">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/xuelong2-deck.jpg"
                alt={language === "en" ? "Bingkuan Liu aboard Xuelong 2" : "刘炳宽在雪龙 2 号科考船上"}
                fill
                sizes="(min-width: 768px) 380px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4 text-sm text-muted-foreground">
              {language === "en" ? "Aboard Xuelong 2" : "在“雪龙 2”号科考船上"}
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-xl border bg-background">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/xuelong2-fieldwork.jpg"
                alt={language === "en" ? "Antarctic fieldwork aboard Xuelong 2" : "雪龙 2 号上的南极科考作业"}
                fill
                sizes="(min-width: 768px) 380px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4 text-sm text-muted-foreground">
              {language === "en" ? "Shipboard fieldwork during the expedition" : "科考期间的船上作业"}
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {EXPEDITION_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border bg-background px-4 py-4 font-medium transition-colors hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                {item.icon === "video" ? <Play className="h-5 w-5" /> : <Newspaper className="h-5 w-5" />}
                {item[language]}
              </span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
