"use client"

import { Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage, type Language } from "@/context/language-context"

interface BilingualText {
  en: string
  zh: string
}

interface ResumeEntry {
  title: BilingualText
  subtitle: BilingualText
  location: BilingualText
  period: BilingualText
  bullets: BilingualText[]
}

const EDUCATION: ResumeEntry[] = [
  {
    title: { en: "Fudan University", zh: "复旦大学" },
    subtitle: { en: "Ph.D. Student in Atmospheric Science", zh: "大气科学博士生" },
    location: { en: "Shanghai, China", zh: "中国上海" },
    period: { en: "Sep 2025 - Jun 2030", zh: "2025年09月 - 2030年06月" },
    bullets: [],
  },
  {
    title: { en: "University of California San Diego (UC San Diego)", zh: "美国加州大学圣地亚哥分校（UC San Diego）" },
    subtitle: { en: "B.S. in Mathematics-Computer Science", zh: "数学-计算机科学学士（B.S.）" },
    location: { en: "San Diego, California, USA", zh: "美国加利福尼亚州圣地亚哥" },
    period: { en: "Sep 2021 - Sep 2025", zh: "2021年09月 - 2025年09月" },
    bullets: [
      {
        en: "Core coursework: calculus, linear algebra, probability, differential equations, discrete mathematics, graph theory, data analysis, numerical optimization, Python, C, microeconomics, macroeconomics, systems programming, and data structures.",
        zh: "核心课程：微积分、线性代数、概率论、微分方程、离散数学、图论、数据分析、数值优化、Python、C、微观经济学、宏观经济学、系统程序设计与软件工具、数据结构。",
      },
    ],
  },
]

const FIELDWORK: ResumeEntry[] = [
  {
    title: {
      en: "China's 42nd Antarctic Scientific Expedition",
      zh: "中国第 42 次南极科学考察",
    },
    subtitle: {
      en: "Expedition Participant aboard the research icebreaker Xuelong 2",
      zh: "随“雪龙 2”号科考船参加科考",
    },
    location: { en: "Southern Ocean and Antarctica", zh: "南大洋与南极" },
    period: { en: "Mar 13 - Apr 29, 2026", zh: "2026年03月13日 - 04月29日" },
    bullets: [
      {
        en: "Participated in shipboard field activities during China's 42nd Antarctic Scientific Expedition.",
        zh: "参加中国第 42 次南极科学考察，开展随船科考活动。",
      },
    ],
  },
]

const EXPERIENCE: ResumeEntry[] = [
  {
    title: { en: "Shanghai Institute for Scientific Intelligence", zh: "上海科学智能研究院" },
    subtitle: { en: "Research Intern", zh: "科研实习生" },
    location: { en: "Shanghai, China", zh: "中国上海" },
    period: { en: "Nov 2025 - Jun 2026", zh: "2025年11月 - 2026年06月" },
    bullets: [
      {
        en: "Reviewed physical predictability, statistical baselines, dynamical forecast systems, and AI methods for 1-8 week subseasonal Antarctic sea-ice concentration prediction.",
        zh: "围绕南极海冰浓度 1-8 周次季节预测，系统梳理物理可预报性、传统统计基线、动力预报系统与 AI 方法。",
      },
      {
        en: "Surveyed SIPNet, ConvLSTM, Ice-kNN-South, ANTSIC-UNet, ASICNet, and related approaches.",
        zh: "调研 SIPNet、ConvLSTM、Ice-kNN-South、ANTSIC-UNet、ASICNet 等方法。",
      },
      {
        en: "Built and validated initial U-Net and Swin Transformer pipelines for later Swin-UNet, multivariable-input, physical-constraint, and sea-ice-edge evaluation experiments.",
        zh: "初步搭建并跑通 U-Net 与 Swin Transformer 模型框架，为后续 Swin-UNet、多变量输入、物理约束和海冰边缘评估实验打下基础。",
      },
      {
        en: "Designed a technical workflow covering data processing, baseline evaluation, and stratified validation by lead time, season, and region.",
        zh: "形成包含数据处理、baseline 评估以及按 lead time、season、region 分层验证的技术路线。",
      },
    ],
  },
  {
    title: { en: "Spreadtrum Communications USA Inc.", zh: "展讯通信有限公司 Spreadtrum Communications USA Inc." },
    subtitle: { en: "Software Engineering Intern, Software Development", zh: "软件开发部软件工程实习生" },
    location: { en: "United States", zh: "美国" },
    period: { en: "Jun 2024 - Aug 2024", zh: "2024年06月 - 2024年08月" },
    bullets: [
      {
        en: "Used USRP hardware to test 5G communication protocols and reported performance findings to the R&D team.",
        zh: "使用 USRP 开展 5G 通信协议测试，并将性能结果反馈给研发团队。",
      },
      {
        en: "Implemented and tested a simplified multi-channel estimation algorithm, with emphasis on throughput and latency.",
        zh: "实现并测试简化版多通道估计算法，重点评估吞吐量与时延指标。",
      },
      {
        en: "Presented experiment progress in daily meetings and collaborated on technical troubleshooting.",
        zh: "参与每日会议，汇报实验进展并协作解决技术问题。",
      },
    ],
  },
  {
    title: {
      en: "Shanghai Institute of Microsystem and Information Technology, Chinese Academy of Sciences",
      zh: "中国科学院上海微系统与信息技术研究所",
    },
    subtitle: { en: "Data Analysis Intern, R&D", zh: "研发部数据分析实习生" },
    location: { en: "Shanghai, China", zh: "中国上海" },
    period: { en: "Jul 2023 - Sep 2023", zh: "2023年07月 - 2023年09月" },
    bullets: [
      {
        en: "Contributed to an autonomous-driving image-processing project for detecting vehicles, buildings, pedestrians, and other real-world objects.",
        zh: "参与面向自动驾驶应用的图像处理研发项目，识别车辆、建筑、行人等真实世界目标。",
      },
      {
        en: "Benchmarked YOLO, SSD, Faster R-CNN, and related architectures for speed, accuracy, and detectable-object coverage.",
        zh: "对 YOLO、SSD、Faster R-CNN 等架构在实时目标识别中的速度、准确率与可识别目标数量进行对比测试。",
      },
      {
        en: "Worked with engineers to integrate the strongest CNN model into an existing vehicle system and documented the testing workflow.",
        zh: "与工程团队协作，将效果较优的 CNN 模型集成至现有行车系统，并记录测试流程和技术说明。",
      },
    ],
  },
  {
    title: { en: "Black Sesame Technology", zh: "黑芝麻智能 Black Sesame Technology" },
    subtitle: { en: "ADAS Test Intern, R&D", zh: "研发部 ADAS 测试实习生" },
    location: { en: "Singapore", zh: "新加坡" },
    period: { en: "Dec 2022 - Feb 2023", zh: "2022年12月 - 2023年02月" },
    bullets: [
      {
        en: "Developed Python scripts to transfer sensor data to CPU/FPGA platforms with an emphasis on reliability and speed.",
        zh: "开发 Python 脚本，将传感器数据传输到 CPU/FPGA 平台，强调可靠性与速度。",
      },
      {
        en: "Performed system tests across operating conditions, diagnosed communication issues, and supported data collection for AI perception and modeling.",
        zh: "在多种工况下开展系统测试、定位通信问题，并参与数据采集，为 AI 感知算法与建模提供支持。",
      },
      {
        en: "Validated optimized data-transfer workflows through daily ADAS reliability tests in different environments.",
        zh: "按照优化后的数据传输方案开展 ADAS 日常测试，验证系统可靠性并调试不同环境下的问题。",
      },
    ],
  },
]

const ACTIVITIES: ResumeEntry[] = [
  {
    title: { en: "Music Club, UC San Diego", zh: "音乐社（UC San Diego）" },
    subtitle: { en: "Co-founder & Saxophonist", zh: "联合创始人 & 萨克斯演奏者" },
    location: { en: "San Diego, California, USA", zh: "美国加利福尼亚州圣地亚哥" },
    period: { en: "Oct 2023 - Sep 2025", zh: "2023年10月 - 2025年09月" },
    bullets: [
      {
        en: "Co-founded the club, interviewed more than 50 students, organized bands and sections, and coordinated weekly meetings and rehearsals.",
        zh: "共同创立音乐社，面试 50+ 名学生，组织不同乐队与声部，并协调每周例会和排练。",
      },
      {
        en: "Performed at UC San Diego fall-opening and Chinese National Day celebrations.",
        zh: "在 UC San Diego 秋季开学庆典与国庆庆典中演出。",
      },
    ],
  },
  {
    title: { en: "Fudan University Badminton Club", zh: "复旦大学羽毛球社" },
    subtitle: { en: "First-team Player", zh: "院队主力选手" },
    location: { en: "Shanghai, China", zh: "中国上海" },
    period: { en: "Sep 2025 - Present", zh: "2025年09月 - 至今" },
    bullets: [
      {
        en: "Reached the university-wide men's singles top 16 in the 2025 Fudan Freshman Cup.",
        zh: "2025 年复旦大学新生杯男单全校 16 强。",
      },
      {
        en: "Helped the department team reach the university-wide top 16 in the 2025 Fudan Department Cup.",
        zh: "2025 年复旦大学院系杯带领院队获得全校 16 强。",
      },
    ],
  },
]

function ResumeSection({ title, entries, language }: { title: BilingualText; entries: ResumeEntry[]; language: Language }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title[language]}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-7">
        {entries.map((entry) => (
          <article key={entry.title.en}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
              <h3 className="font-bold sm:max-w-[72%]">{entry.title[language]}</h3>
              <p className="shrink-0 text-sm sm:text-right">{entry.period[language]}</p>
            </div>
            <div className="mt-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
              <p>{entry.subtitle[language]}</p>
              <p className="shrink-0 text-sm sm:text-right">{entry.location[language]}</p>
            </div>
            {entry.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
                {entry.bullets.map((bullet) => (
                  <li key={bullet.en} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{bullet[language]}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </CardContent>
    </Card>
  )
}

export default function ResumePage() {
  const { language } = useLanguage()

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{language === "en" ? "Resume" : "简历"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {language === "en" ? "Bingkuan Liu · Academic and professional profile" : "刘炳宽 · 学术与职业经历"}
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/刘炳宽_中文简历.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            {language === "en" ? "Download PDF" : "下载 PDF"}
          </Link>
        </Button>
      </div>

      <ResumeSection title={{ en: "Education", zh: "教育背景" }} entries={EDUCATION} language={language} />
      <ResumeSection title={{ en: "Field Experience", zh: "科考经历" }} entries={FIELDWORK} language={language} />
      <ResumeSection title={{ en: "Experience", zh: "实习经历" }} entries={EXPERIENCE} language={language} />
      <ResumeSection title={{ en: "Leadership & Activities", zh: "校园与社团活动" }} entries={ACTIVITIES} language={language} />

      <Card>
        <CardHeader>
          <CardTitle>{language === "en" ? "Skills" : "技能"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><strong>{language === "en" ? "Programming: " : "编程："}</strong>Python, C, MATLAB, Java, R</p>
          <p><strong>{language === "en" ? "Models: " : "模型："}</strong>CESM, WRF, NeuralGCM</p>
          <p><strong>{language === "en" ? "Software: " : "软件："}</strong>ChatGPT, Cursor, Zotero, Office, Adobe</p>
          <p>
            <strong>{language === "en" ? "Hobbies: " : "兴趣爱好："}</strong>
            {language === "en" ? "Good at badminton and swimming; cooking; hiking" : "擅长羽毛球和游泳；烹饪；徒步"}
          </p>
        </CardContent>
      </Card>
    </>
  )
}
