"use client"

import { useLanguage } from "@/context/language-context"

interface NewsItem {
  date: string
  title: { en: string; zh: string }
  content: { en: string; zh: string }
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026-03-13",
    title: {
      en: "Joined China's 42nd Antarctic Scientific Expedition",
      zh: "参加中国第 42 次南极科学考察",
    },
    content: {
      en: "Participated in the expedition aboard the research icebreaker Xuelong 2 from March 13 to April 29, 2026.",
      zh: "2026年03月13日至04月29日，随“雪龙 2”号科考船参加南极科学考察。",
    },
  },
  {
    date: "2025-11-01",
    title: { en: "Joined the Shanghai Institute for Scientific Intelligence", zh: "加入上海科学智能研究院" },
    content: {
      en: "Started research on subseasonal Antarctic sea-ice concentration prediction and AI forecasting methods.",
      zh: "开始开展南极海冰浓度次季节预测与 AI 预报方法研究。",
    },
  },
  {
    date: "2025-09-01",
    title: { en: "Started a Ph.D. in Atmospheric Science at Fudan University", zh: "进入复旦大学攻读大气科学博士" },
    content: {
      en: "Began doctoral studies in Atmospheric Science at Fudan University.",
      zh: "进入复旦大学，开始大气科学博士阶段学习。",
    },
  },
  {
    date: "2025-09-01",
    title: { en: "Graduated from UC San Diego", zh: "从加州大学圣地亚哥分校毕业" },
    content: {
      en: "Earned a B.S. in Mathematics-Computer Science from UC San Diego.",
      zh: "获得加州大学圣地亚哥分校数学-计算机科学学士学位。",
    },
  },
  {
    date: "2024-06-01",
    title: { en: "Joined Spreadtrum Communications USA", zh: "加入展讯通信美国公司" },
    content: {
      en: "Worked as a software engineering intern on 5G protocol and multi-channel estimation testing.",
      zh: "担任软件工程实习生，参与 5G 协议与多通道估计测试。",
    },
  },
  {
    date: "2023-10-01",
    title: { en: "Co-founded the UC San Diego Music Club", zh: "共同创立 UC San Diego 音乐社" },
    content: {
      en: "Served as a co-founder and saxophonist, organizing bands, rehearsals, and performances.",
      zh: "担任联合创始人和萨克斯演奏者，组织乐队、排练与演出。",
    },
  },
]

export default function NewsPage() {
  const { language } = useLanguage()

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold tracking-tight">{language === "en" ? "Timeline" : "时间线"}</h1>
      <div className="relative ml-4">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
        <div className="space-y-12">
          {NEWS_ITEMS.map((item) => (
            <div key={`${item.date}-${item.title.en}`} className="relative pl-8">
              <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />
              <div className="mb-2 text-sm text-muted-foreground">
                {new Date(item.date).toLocaleDateString(language === "en" ? "en-US" : "zh-CN", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title[language]}</h3>
              <p className="text-muted-foreground">{item.content[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
